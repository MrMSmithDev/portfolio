import { MenuIcon } from '@components/icons';
import React, { useEffect, useRef, useState } from 'react';
const Header = () => {
  const [blurredHeader, setBlurredHeader] = useState<boolean>(false);
  const [dropMenuIsActive, setDropMenuIsActive] = useState<boolean>(false);

  function handleScroll(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setDropMenuIsActive(false);
  }

  function handleDropMenu() {
    setDropMenuIsActive((prev) => !prev);
  }

  useEffect(() => {
    const handleHeaderBg = () => {
      const yPosition = document.body!.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (-yPosition > viewportHeight) {
        setBlurredHeader(true);
      } else {
        setBlurredHeader(false);
      }
    };

    handleHeaderBg();
    window.addEventListener('scroll', handleHeaderBg);

    return () => window.removeEventListener('scroll', handleHeaderBg);
  }, []);

  useEffect(() => {
    function closeMenuCallback(event: MouseEvent) {
      const menu = document.querySelector('.drop-down');
      const menuButton = document.querySelector('.menu-button');

      if (
        menu &&
        !menu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setDropMenuIsActive(false);
      }
    }

    if (dropMenuIsActive) {
      window.addEventListener('click', closeMenuCallback);
    }

    return () => window.removeEventListener('click', closeMenuCallback);
  }, [dropMenuIsActive]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 grid grid-cols-[auto_1fr] md:grid-cols-[2fr_2fr] content-center h-10 md:h-20 p-2 sm:p-5 md:p-10 z-10 slide-from-top border-b-solid border-b-primary z-100 ${
        blurredHeader ? 'border-b-2 backdrop-blur-xl' : 'border-0'
      }`}
    >
      <a
        className="flex justify-center items-center border-primary border-3 border-solid h-[30px] w-[50px] md:h-[50px] cursor-pointer z-10 hover:animate-gelatine"
        href="#hero"
      >
        <span className="sr-only">Home link</span>
        <span className="text-primary font-bold md:-mt-2">
          MJS<span className="text-xl md:text-3xl">.</span>
        </span>
      </a>
      <nav className=" hidden sm:flex justify-around gap-5 px-5 ml-auto">
        <button
          onClick={() => handleScroll('#about')}
          className="flex items-center justify-center text-center p-2 text-primary relative overflow-hidden transition-colors duration-200 ease-in-out h-8 md:h-10 w-full my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:text-blue-bg hover:before:w-full"
        >
          <span className="font-bold z-10">ABOUT</span>
        </button>
        <button
          onClick={() => handleScroll('#projects')}
          className="flex items-center justify-center text-center p-2 text-primary relative overflow-hidden transition-colors duration-200 ease-in-out h-8 md:h-10 w-full my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:text-blue-bg hover:before:w-full"
        >
          <span className="font-bold z-10">PROJECTS</span>
        </button>
        <button
          onClick={() => handleScroll('#contact')}
          className="flex items-center justify-center text-center p-2 text-primary relative overflow-hidden transition-colors duration-200 ease-in-out h-8 md:h-10 w-full my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:text-blue-bg hover:before:w-full"
        >
          <span className="font-bold z-10">CONTACT</span>
        </button>
      </nav>
      <div className="justify-around gap-5 ml-auto flex sm:hidden ">
        <button
          onClick={handleDropMenu}
          className={`${dropMenuIsActive ? 'border-primary border-solid border-3' : ''} menu-button h-[30px] w-[30px] p-0 m-0 z-10 cursor-pointer`}
        >
          <span className="sr-only">Drop Menu</span>
          <MenuIcon />
        </button>
      </div>
      <div
        className={`${dropMenuIsActive ? 'translate-y-0' : '-translate-y-full'} flex sm:hidden flex-col fixed pt-10 top-0 left-0 right-0 bg-gray-700 drop-down`}
      >
        <button
          onClick={() => handleScroll('#about')}
          className="flex items-center justify-center text-center p-2 text-primary relative overflow-hidden transition-colors duration-200 ease-in-out h-8 md:h-10 w-full my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:text-blue-bg hover:before:w-full"
        >
          <span className="font-bold z-10">ABOUT</span>
        </button>
        <button
          onClick={() => handleScroll('#projects')}
          className="flex items-center justify-center text-center p-2 text-primary relative overflow-hidden transition-colors duration-200 ease-in-out h-8 md:h-10 w-full my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:text-blue-bg hover:before:w-full"
        >
          <span className="font-bold z-10">PROJECTS</span>
        </button>
        <button
          onClick={() => handleScroll('#contact')}
          className="flex items-center justify-center text-center p-2 text-primary relative overflow-hidden transition-colors duration-200 ease-in-out h-8 md:h-10 w-full my-auto border-b-solid border-b-2 border-b-gray-100 cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:text-blue-bg hover:before:w-full"
        >
          <span className="font-bold z-10">CONTACT</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
