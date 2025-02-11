import About from '@components/about';
import Head from 'next/head';
import Hero from '@components/hero';
import Projects from '@components/projects';
import React from 'react';
import Contact from '@components/contact';
import { Curves } from '@components/utils';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <html lang="en"></html>
        <title>Michael Smith</title>
        <meta name="description" content="A web development portfolio" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="bg-blue-bg">
        <Hero />
        <About />
        <div className="leading-0">
          <Curves from="#f3f4f6" to="blue-bg" />
        </div>
        <Projects />
        <div className="leading-0 text-[0px] overflow-hidden">
          <Curves from="#001523" to="gray-100" />
        </div>
        <Contact />
      </main>
    </>
  );
};

export default Index;
