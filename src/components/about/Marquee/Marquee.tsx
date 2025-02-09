import React from 'react';

import {
  JavascriptIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  SCSSIcon,
  TypescriptIcon,
} from '@components/icons';

const Marquee: React.FC = () => {
  return (
    <div className="marquee relative flex overflow-x-hidden w-100 max-w-full md:w-200 before:absolute before:content-[''] before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-[20%] before:bg-linear-to-r before:from-gray-100 before:to-transparent after:absolute after:content-[''] after:top-0 after:bottom-0 after:right-0 after:w-[20%] after:z-10 after:bg-linear-to-l after:from-gray-100 after:to-transparent">
      <div className="py-5 animate-marquee whitespace-nowrap">
        <JavascriptIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <NextJSIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <MongoDBIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <TypescriptIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <NodeJSIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <ReactIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <SCSSIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
      </div>
      <div className="absolute top-0 py-5 animate-marquee-duplicate whitespace-nowrap">
        <JavascriptIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <NextJSIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <MongoDBIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <TypescriptIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <NodeJSIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <ReactIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
        <SCSSIcon className="inline-block mx-4 w-10 h-10 md:w-30 md:h-30" />
      </div>
    </div>
  );
};

export default Marquee;
