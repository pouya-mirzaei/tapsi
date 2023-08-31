import React from 'react';

export default function ContactBox({ text, icon }) {
  return (
    <div className="flex items-center gap-x-2.5 bg-white dark:bg-dark-1 dark:text-light hover:bg-primary dark:hover:bg-primary border border-tertiary hover:border-primary text-[#444746] hover:text-white rounded-xl py-3 px-4 cursor-pointer transition-colors">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-2 dark:bg-dark-2 rounded-full ">
        <svg className="w-1/2 text-black dark:text-light">
          <use href={`SVG/${icon.type}.svg#${icon.name}`}></use>
        </svg>
      </div>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
}
