import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  textArr: string[];
  className?: string;
  speed?: number;
  pause?: number;
}

const Typewriter = ({ textArr, className = '', speed = 150, pause = 800 }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = textArr[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause after full word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      // Move to the next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArr.length);
        setCharIndex(0);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textArr, textIndex, speed, pause]);

  return (
    <p
      className={`${className} relative inline-block select-none after:content-['|'] after:ml-[2px] after:height-[1em] after:relative after:inline-block after:animate-type-cursor`}
    >
      {currentText}
      <span className="cursor"></span>
    </p>
  );
};

export default Typewriter;
