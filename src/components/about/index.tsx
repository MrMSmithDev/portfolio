import React from 'react';
import Typewriter from './Typewriter/Typewriter';
import Marquee from './Marquee/Marquee';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center min-h-screen bg-gray-100 px-5 md:px-20"
    >
      <div className="flex flex-col gap-5 py-5 md:py-10 items-center">
        <Typewriter
          textArr={[
            'Passionate',
            'Motivated',
            'Proactive',
            'Driven',
            'Collaborative',
          ]}
          className="h-5 md:h-10 text-xl md:text-3xl text-gray-700 tracking-wider"
        />
        <div className="bg-primary h-1 w-20"></div>
      </div>
      <div className="flex flex-col md:grid grid-cols-[auto_1fr]">
        <div className="flex justify-center items-center">
          <img
            src="/assets/images/profile_img.webp"
            className="rounded border-10 border-solid border-gray-200 shadow-xl rotate-9 bg-red-500 w-50 mr-5"
            alt="Image of Michael"
          />
        </div>
        <div className="flex flex-col gap-5 py-5 md:mx-10 md:py-10 justify-center items-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-700 tracking-wide mr-auto">
            Meet Michael
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2 md:mt-5">
            Hi, thanks for visiting my page. I'm Michael, or Mike. I am a
            passionate web developer transitioning into the professional field
            after dedicating the past three years to mastering the craft. My
            journey began with the 100 Days of Python course and evolved through
            The Odin Project, where I built a strong foundation in JavaScript,
            TypeScript, React.js, and Next.js. I enjoy creating accessible,
            maintainable software and have worked on projects like a mock online
            storefront, an inventory management system, and a gym tracking app.
            On the back-end, I’ve developed expertise in databases like MongoDB,
            Prisma ORM, and SQL, implementing RESTful APIs with robust
            validation and error handling to ensure seamless functionality.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-2 md:mt-5">
            With 18 years of experience in education and logistics, I bring
            strong leadership, communication, and problem-solving skills to
            collaborative environments. I’m eager to contribute to impactful
            projects, continue growing as a developer, and create meaningful
            digital experiences. Outside of coding, I’m an avid guitarist with
            over 20 years of experience and a five-a-side football enthusiast,
            though my teammates might debate my resemblance to Denis Law!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-5 md:py-10 items-center">
        <div className="bg-primary h-1 w-20"></div>
        <Marquee />
      </div>
    </section>
  );
};

export default About;
