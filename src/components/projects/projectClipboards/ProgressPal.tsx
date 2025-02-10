import React, { useRef } from 'react';
import { animateInView } from 'src/hooks/animateInView';
import BadgeSet from './BadgeSet';

const ProgressPalClipboard: React.FC = () => {
  const elRef = useRef(null);
  const isVisible = animateInView<HTMLDivElement>(elRef);

  return (
    <div
      ref={elRef}
      className={`flex flex-col flex my-10 lg:flex-row mr-auto transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <img
        className="w-[100%] lg:w-[45vw] bg-gray-500 border-10 border-gray-100 border-solid"
        src="/assets/images/progress_pal.webp"
      />
      <div className="lg:ml-10 text-center lg:text-left">
        <div className="text-gray-100">
          <p className="md:text-lg">
            <span className="font-bold">Progress Pal</span> - A gym tracking app
            that helps users log exercises, weights, distances, and body weight
            while setting and monitoring fitness targets. Currently in progress
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
          <BadgeSet
            titleArr={[
              'React.js',
              'Next.js',
              'Express.js',
              'MongoDB',
              'Typescript',
              'Tailwind',
            ]}
          />
        </div>
        <div className="flex justify-center lg:justify-start gap-5 mt-5 w-full">
          <a
            href="https://github.com/MrMSmithDev/progresspal_client"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              Frontend
            </span>
          </a>
          <a
            href="https://github.com/MrMSmithDev/progresspal_server"
            target="_blank"
            rel="noopener noreferrer"
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
