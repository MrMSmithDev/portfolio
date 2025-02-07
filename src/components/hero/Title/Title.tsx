import React, { useState } from 'react';

const Title: React.FC = () => {
  function handleScroll(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col text-gray-100 font-bold font-sansation tracking-wider -mt-[100px]">
      <p className="slide-from-left text-2xl md:text-4xl">
        Hello, I'm <span className="text-primary">Michael.</span>
      </p>
      <p className="slide-from-right ml-auto">
        I am a <span className="text-primary">full-stack </span>web developer
      </p>
      <button
        onClick={() => handleScroll('#projects')}
        className="title-button button-fade-in w-max p-4 mt-10 mx-auto relative border-primary border-solid border-2 cursor-pointer"
      >
        View my work
      </button>
    </div>
  );
};
export default Title;
