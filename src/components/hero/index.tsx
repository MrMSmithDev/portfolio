import React from 'react';
import GitHubSVG from '@icons/github';
import Title from './title/Title';

const Hero: React.FC = () => {
  const videoUrl =
    process.env.ENV === 'dev'
      ? '/assets/video/hero-bg.mp4'
      : 'https://pub-e22900b9aca041d9893362a0fc9beb4b.r2.dev/hero-bg.mp4';
  return (
    <section id="hero" className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover pt-10 md:pt-20 z-0"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <header className="relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_2fr_1fr] content-center h-10 md:h-20 p-5 md:p-10 z-10">
        <a
          className="flex justify-center items-center border-primary border-3 border-solid rounded mt-[5px] md:mt-0 h-[30px] w-[50px] md:h-[50px] cursor-pointer"
          href=""
        >
          <span className="text-primary font-bold md:-mt-2">
            MJS<span className="text-xl md:text-3xl">.</span>
          </span>
        </a>
        <div className="flex justify-around md:justify-between gap-5 px-5">
          <a
            href="#about"
            className="flex items-center justify-center text-center rounded p-2 link-hover h-8 md:h-10 w-full my-auto"
          >
            <span className="text-primary font-bold z-10">ABOUT</span>
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center text-center rounded p-2 link-hover h-8 md:h-10 w-full my-auto"
          >
            <span className="text-primary font-bold z-10">PROJECTS</span>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center text-center rounded p-2 link-hover h-8 md:h-10 w-full my-auto"
          >
            <span className="text-primary font-bold z-10">CONTACT</span>
          </a>
        </div>
        <div className="flex">
            <a href="https://github.com/MrMSmithDev/portfolio" className="cursor-pointer ml-auto">
                <GitHubSVG className="mt-[5px] md:mt-0 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"/>
            </a>
        </div>
      </header>
      <div className="absolute flex items-center justify-center w-full title-container md:md-title-container">
        <Title />
      </div>
    </section>
  );
};

export default Hero;
