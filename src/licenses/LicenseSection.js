import React from 'react';
import LicenseBox from './components/LicenseBox';

export default class LicenseSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boxData: [
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
      ],
    };
  }

  render() {
    return (
      <section className="container">
        <h2 className="sec-title mb-11">گواهینامه ها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-1">
          <LicenseBox {...this.state.boxData[0]}></LicenseBox>
          <LicenseBox {...this.state.boxData[1]}></LicenseBox>
          <LicenseBox {...this.state.boxData[2]}></LicenseBox>
        </div>
      </section>
    );
  }
}
