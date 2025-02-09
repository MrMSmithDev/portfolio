import React, { useRef } from 'react';
import { animateInView } from 'src/hooks/animateInView';

const WhereAmIClipboard: React.FC = () => {
  const elRef = useRef(null);
  const isVisible = animateInView<HTMLDivElement>(elRef);

  return (
    <div
      ref={elRef}
      className={`flex flex-col my-10 md:flex-row mr-auto transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <img
        className="w-[100%] md:w-[45vw] bg-gray-500 border-10 border-gray-100 border-solid"
        src="/assets/images/where_am_i.webp"
      />
      <div className="md:ml-10 text-center md:text-left">
        <div className="text-gray-100">
          <p className="md:text-lg">
            <span className="font-bold">Where Am I?</span> - Complete further
            description
          </p>
        </div>
        <div className="flex justify-center md:justify-start gap-5 mt-5">
          <a
            href="https://mrmsmithdev.github.io/where-am-i/"
            className="flex items-center justify-center text-center p-2 link-hover h-8 md:h-10 w-[100px] my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer"
          >
            <span className="text-primary font-bold z-10 tracking-wider">
              View
            </span>
          </a>
          <a
            href="https://github.com/MrMSmithDev/where-am-i"
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
