import React  from 'react';
import Title from './Title';
import Header from '@components/Header/Header';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[100lvh] overflow-hidden !p-0 !m-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute block w-full h-[100lvh] object-cover z-0 !p-0 !m-0"
      >
        <track
          src="/assets/video/silent-captions.vtt"
          kind="metadata"
          srcLang="en"
          label="English"
        />
        <source src='https://pub-e22900b9aca041d9893362a0fc9beb4b.r2.dev/hero-bg.mp4' type="video/mp4" />
      </video>
      <Header />
      <div className="absolute flex items-center justify-center w-full title-container md:md-title-container">
        <Title />
      </div>
    </section>
  );
};

export default Hero;
