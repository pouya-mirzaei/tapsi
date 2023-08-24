import React from 'react';
import ProjectBox from './components/ProjectBox';

export default function Portfolio() {
  return (
    <section className="bg-gray-1">
      <div className="container">
        <h2 className="sec-title mb-11">نمونه کار های من</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <ProjectBox img="1" title="طراحی برنامه گوشی" description="برنامه گوشی و طراحی برنامه"></ProjectBox>
          <ProjectBox img="2" title="طراحی برنامه گوشی" description="برنامه گوشی و طراحی برنامه"></ProjectBox>
          <ProjectBox img="3" title="طراحی برنامه گوشی" description="برنامه گوشی و طراحی برنامه"></ProjectBox>
          <ProjectBox img="4" title="طراحی برنامه گوشی" description="برنامه گوشی و طراحی برنامه"></ProjectBox>
          <ProjectBox img="5" title="طراحی برنامه گوشی" description="برنامه گوشی و طراحی برنامه"></ProjectBox>
          <ProjectBox img="6" title="طراحی برنامه گوشی" description="برنامه گوشی و طراحی برنامه"></ProjectBox>
        </div>
      </div>
    </section>
  );
}
