import React, { useRef } from 'react';
import { animateInView } from 'src/hooks/animateInView';

const ProgressPalClipboard: React.FC = () => {
  const elRef = useRef(null);
  const isVisible = animateInView<HTMLDivElement>(elRef);

  return (
    <div
      ref={elRef}
      className={`flex flex-col flex my-10 md:flex-row mr-auto transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <img
        className="w-[100%] md:w-[45vw] bg-gray-500 border-10 border-gray-100 border-solid"
        src="/assets/images/progress_pal.webp"
      />
      <div className="md:ml-10 text-center md:text-left">
        <div className="text-gray-100">
          <p className="md:text-lg">
            <span className="font-bold">Progress Pal</span> - A gym progress
            tracking app, currently in progress
          </p>
        </div>
        <div className="flex justify-center md:justify-start gap-5 mt-5 w-full">
          <a
            href="https://github.com/MrMSmithDev/progresspal_client"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              Frontend
            </span>
          </a>
          <a
            href="https://github.com/MrMSmithDev/progresspal_server"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              Backend
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgressPalClipboard;
