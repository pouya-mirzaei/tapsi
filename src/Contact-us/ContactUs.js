import React from 'react';
import Contact from './ContactUs/Contact';
import Form from '../Form/Form';

export default function ContactUs() {
  return (
    <section className="bg-gray-1 border-b border-tertiary" id="footer">
      <div className="container">
        <div className="flex flex-col lg:flex-row  w-full gap-16">
          <Contact />
          <Form />
        </div>
      </div>
    </section>
  );
}
