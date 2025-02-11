import React from 'react';
import {
  MemoryCardsClipboard,
  ProgressPalClipboard,
  WhereAmIClipboard,
} from './projectClipboards';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center min-h-screen bg-blue-bg px-10 md:px-20"
    >
      <h1 className="text-center text-primary font-bold text-xl my-10 md:mt-20 md:text-3xl">
        PROJECTS
      </h1>

      <ProgressPalClipboard />
      <MemoryCardsClipboard />
      <WhereAmIClipboard />
    </section>
  );
};

export default Projects;
