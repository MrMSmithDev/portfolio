import React, { useEffect, useState } from 'react';
import GitHubSVG from '@components/icons/Github';
import Title from './Title';
import Header from '@components/Header/Header';

const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState('/assets/video/hero-bg.mp4');

  useEffect(() => {
    setVideoSrc(
      'https://pub-e22900b9aca041d9893362a0fc9beb4b.r2.dev/hero-bg.mp4'
    );
  }, []);

  // const videoUrl =
  //   process.env.ENV === 'dev'
  //     ? '/assets/video/hero-bg.mp4'
  //     : 'https://pub-e22900b9aca041d9893362a0fc9beb4b.r2.dev/hero-bg.mp4';
  return (
    <section id="hero" className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Header />
      <div className="absolute flex items-center justify-center w-full title-container md:md-title-container">
        <Title />
      </div>
    </section>
  );
};

export default Hero;
