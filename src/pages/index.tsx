import About from '@components/about';
import Hero from '@components/hero';
import Projects from '@components/projects';
import React from 'react';

import Head from 'next/head';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Michael Smith</title>
        <meta name="description" content="A web development portfolio" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="bg-blue-bg">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Index;
