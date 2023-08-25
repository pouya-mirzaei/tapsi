import React from 'react';
import Contact from './ContactUs/Contact';
import ContactForm from './Contact-form/ContactForm';

export default function Footer() {
  return (
    <footer className="bg-gray-1 py-10">
      <div className="container">
        <div className="flex items-center  w-full gap-16 [&>*]:basis-1/2">
          <Contact />
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
