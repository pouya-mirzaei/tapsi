import React from 'react';
import LicenseBox from './components/LicenseBox';
import SocialMediaIcons from './../SocialMediaIcons/SocialMeiaIcons';

export default function LicenseSection() {
  const boxData = [
    {
      avatar: 1,
      title: 'درگیری مشتریان و علاقه مندان.',
      description: '“دریافت ایده‌ها و طرح‌ها برای به اشتراک گذاشتن با مشتریانم”',
      name: 'جنیفر لوترن',
      role: 'مدیر عامل شرکت',
    },
    {
      avatar: 2,
      title: 'درگیری مشتریان و علاقه مندان.',
      description: '“دریافت ایده‌ها و طرح‌ها برای به اشتراک گذاشتن با مشتریانم”',
      name: 'جنیفر لوترن',
      role: 'مدیر عامل شرکت',
    },
    {
      avatar: 3,
      title: 'درگیری مشتریان و علاقه مندان.',
      description: '“دریافت ایده‌ها و طرح‌ها برای به اشتراک گذاشتن با مشتریانم”',
      name: 'جنیفر لوترن',
      role: 'مدیر عامل شرکت',
    },
  ];

  return (
    <section className="container">
      <h2 className="sec-title mb-11">گواهینامه ها</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-1">
        <LicenseBox {...boxData[0]}></LicenseBox>
        <LicenseBox {...boxData[1]}></LicenseBox>
        <LicenseBox {...boxData[2]}></LicenseBox>
      </div>
    </section>
  );
}
