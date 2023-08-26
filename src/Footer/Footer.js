import React from 'react';
import Contact from './ContactUs/Contact';
import Form from '../Form/Form';

export default function Footer() {
  return (
    <footer className="bg-gray-1 py-10" id="footer">
      <div className="container">
        <div className="flex items-center  w-full gap-16">
          <Contact />
          <Form />
        </div>
      </div>
    </footer>
  );
}
