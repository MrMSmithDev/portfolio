import About from '@components/about';
import Head from 'next/head';
import Hero from '@components/hero';
import Projects from '@components/projects';
import React from 'react';
import Contact from '@components/contact';
import { CurveBottom, CurveTop } from '@components/utils';

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
        <CurveTop />
        <Projects />
        <CurveBottom />
        <Contact />
      </main>
    </>
  );
};

export default Index;
