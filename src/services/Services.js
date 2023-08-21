import React from 'react';
import FeatureBox from './components/FeatueBox';

export default function Services() {
  let boxDetails = [
    {
      title: 'طراحی وب',
      icon: 'mobile',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    },
    {
      title: 'توسعه',
      icon: 'laptop',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    },
    {
      title: 'بازاریابی سئو',
      icon: 's',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    },
    {
      title: 'طراحی وب',
      icon: 'border-all',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    },
    {
      title: 'توسعه',
      icon: 'chart-bar',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    },
    {
      title: 'بازاریابی سئو',
      icon: 'globe',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    },
  ];

  return (
    <section>
      <div className="container">
        <h2 className="sec-title">خدمات من</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {boxDetails.map((box) => (
            <FeatureBox {...box} />
          ))}
        </div>
      </div>
    </section>
  );
}
