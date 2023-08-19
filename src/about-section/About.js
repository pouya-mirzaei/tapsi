import React from 'react';
import Information from './compoments/Information';
import Sticky from './compoments/Sticky';

export default function About() {
  return (
    <section className="bg-gray-1">
      <div className="container w-full flex flex-col lg:flex-row gap-10 relative">
        <Information></Information>
        <Sticky></Sticky>
      </div>
    </section>
  );
}
