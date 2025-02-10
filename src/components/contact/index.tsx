import React from 'react';
import { GitHubIcon, LinkedInIcon } from '@components/icons';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center min-h-[20vh] bg-gray-100 px-5 md:px-20"
    >
      <h1 className="text-center text-blue-bg font-bold text-xl md:text-3xl">
        Contact
      </h1>
      <div className="bg-primary h-1 w-20 my-10"></div>
      <div className="flex flex-col items-center md:w-[50vw] mx-10">
        <h2 className="font-bold tracking-wider">Lets connect!</h2>
        <p className="text-center mt-2">
          Feel free to reach out on LinkedIn, or check out my other work on
          GitHub. I would love to hear from you.
        </p>
        <div className="flex justify-center gap-5 h-[50px] my-10">
          <a
            href="https://github.com/MrMSmithDev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] hover:animate-gelatine"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-s-bbbaab345/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] hover:animate-gelatine"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
