import React, { useRef } from 'react';
import { animateInView } from 'src/hooks/animateInView';
import BadgeSet from './BadgeSet';

const WhereAmIClipboard: React.FC = () => {
  const elRef = useRef(null);
  const isVisible = animateInView<HTMLDivElement>(elRef);

  return (
    <div
      ref={elRef}
      className={`flex flex-col my-10 lg:flex-row mr-auto transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <img
        className="w-[100%] lg:w-[45vw] bg-gray-500 border-10 border-gray-100 border-solid"
        src="/assets/images/where_am_i.webp"
      />
      <div className="lg:ml-10 text-center lg:text-left">
        <div className="text-gray-100">
          <p className="md:text-lg">
            <span className="font-bold">Where Am I?</span> - A "Where's Wally?"-style game where players select an image and search for five hidden characters
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
          <BadgeSet titleArr={['React.js', 'Typescript', 'Firebase', 'SCSS']} />
        </div>
        <div className="flex justify-center lg:justify-start gap-5 mt-5">
          <a
            href="https://mrmsmithdev.github.io/where-am-i/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              View
            </span>
          </a>
          <a
            href="https://github.com/MrMSmithDev/where-am-i"
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
    </div>
  );
};

export default WhereAmIClipboard;
