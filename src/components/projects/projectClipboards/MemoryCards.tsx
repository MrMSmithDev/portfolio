import React, { useRef } from 'react';
import { animateInView } from 'src/hooks/animateInView';

const MemoryCardsClipboard: React.FC = () => {
  const elRef = useRef(null);
  const isVisible = animateInView<HTMLDivElement>(elRef);

  return (
    <div
      ref={elRef}
      className={`flex flex-col-reverse my-10 md:flex-row ml-auto transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="md:mr-10 text-center md:text-right">
        <div className="text-gray-100">
          <p className="md:text-lg">
            <span className="font-bold">Star Wars Cards</span> - Complete
            further description
          </p>
        </div>
        <div className="flex justify-center md:justify-end gap-5 mt-5">
          <a
            href="https://mrmsmithdev.github.io/memory-card-game/"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              View
            </span>
          </a>
          <a
            href="https://github.com/MrMSmithDev/memory-card-game"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              GitHub
            </span>
          </a>
        </div>
      </div>
      <img
        className="w-[100%] md:w-[45vw] bg-gray-500 border-10 border-gray-100 border-solid"
        src="/assets/images/memory_cards.webp"
      />
    </div>
  );
};

export default MemoryCardsClipboard;
