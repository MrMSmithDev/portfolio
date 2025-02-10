import React, { useRef } from 'react';
import { animateInView } from 'src/hooks/animateInView';
import BadgeSet from './BadgeSet';

const MemoryCardsClipboard: React.FC = () => {
  const elRef = useRef(null);
  const isVisible = animateInView<HTMLDivElement>(elRef);

  return (
    <div
      ref={elRef}
      className={`flex flex-col-reverse my-10 lg:flex-row ml-auto transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="lg:mr-10 text-center lg:text-right">
        <div className="text-gray-100">
          <p className="md:text-lg">
            <span className="font-bold">Star Wars Cards</span> - A simple Star
            Wars-themed game where players try to select 12 unique character
            cards without repeating.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-end">
          <BadgeSet titleArr={['React.js', 'Javascript', 'SCSS']} />
        </div>
        <div className="flex justify-center lg:justify-end gap-5 mt-5">
          <a
            href="https://mrmsmithdev.github.io/memory-card-game/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              View
            </span>
          </a>
          <a
            href="https://github.com/MrMSmithDev/memory-card-game"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              GitHub
            </span>
          </a>
        </div>
      </div>
      <img
        className="w-[100%] lg:w-[45vw] bg-gray-500 border-10 border-gray-100 border-solid"
        src="/assets/images/memory_cards.webp"
        alt="Example image of Mind Training"
      />
    </div>
  );
};

export default MemoryCardsClipboard;
