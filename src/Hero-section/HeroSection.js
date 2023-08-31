import React from 'react';
import SocialMeiaIcons from '../SocialMediaIcons/SocialMeiaIcons';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="dark:bg-dark-1 dark:text-light">
      <div className="container flex items-center justify-center flex-col-reverse lg:flex-row  gap-x-10 w-full relative">
        {/* images */}
        <div className="flex self-stretch gap-x-5 lg:w-1/2 relative z-10">
          <div className="w-1/2 ">
            <img
              src="images/home-banner.jpg"
              className=" object-cover rounded-[150px] rounded-br-lg h-full"
              alt="tapsi"
            />
          </div>
          <div className="w-1/2">
            <img
              src="images/about-banner.jpg"
              className=" object-cover rounded-[150px] rounded-tl-lg h-full"
              alt="tapsi"
            />
          </div>
        </div>

        {/* intro */}
        <div className="flex justify-center flex-col gap-y-5 lg:w-1/2 relative z-10 py-20 text-center lg:text-right">
          <h6 className="text-xl ">👋سلام، من</h6>
          <h1 className="heading-primary">تپسی سوزا هستم</h1>
          <h2 className="heading-secondary">
            <Typewriter
              onInit={(tp) => {
                tp.pauseFor(1000)
                  .typeString('من یک طراح هستم')
                  .pauseFor(1500)
                  .deleteChars(9)
                  .typeString('توسعه دهنده هستم')
                  .pauseFor(1500)
                  .deleteChars(7)
                  .start();
              }}
              options={{ loop: true }}></Typewriter>
          </h2>
          <p className="paragraph">
            ما با متخصصان و رهبرانی کار می کنیم که می خواهند مشاغلی ایجاد کنند که آنها را از نظر فکری و مالی تقویت کنند
          </p>
          <SocialMeiaIcons></SocialMeiaIcons>
        </div>

        <div className="absolute  left-1 top-1 z-0 0 w-[500px] h-[500px] rounded-full bg-secondary blur-[100px] opacity-25"></div>
        <div className="absolute hidden lg:block right-10  z-0 w-[500px] h-[500px] rounded-full bg-primary-2 blur-[100px] opacity-25"></div>
      </div>
    </section>
  );
}
