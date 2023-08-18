import React from 'react';

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center gap-x-5 w-full px-32 mt-28  h-96">
      {/* images */}
      <div className="flex w-3/5 h-full">
        <div className="w-1/2">
          <img src="images/home-banner.jpg" className="bg-cover rounded-[150px]" alt="tapsi" />
        </div>
        <div className="w-1/2">
          <img src="images/about-banner.jpg" className="bg-cover rounded-[150px]" alt="tapsi" />
        </div>
      </div>

      {/* intro */}
      <div className="w-2/5">
        <span>سلام ، من</span>
        <h1>تپسی سوزا هستم</h1>
        <h3>
          ما با متخصصان و رهبرانی کار می کنیم که می خواهند مشاغلی ایجاد کنند که آنها را از نظر فکری و مالی تقویت کنند
        </h3>
        <div>icons</div>
      </div>
    </section>
  );
}
