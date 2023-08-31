import React from 'react';

export default function ContactBox({ title, description, link, icon }) {
  return (
    <div className="flex items-center gap-10 p-5 mt-5">
      <div className="w-6 text-primary">
        <svg>
          <use href={`SVG/${icon.type}.svg#${icon.name}`}></use>
        </svg>
      </div>
      <div className="grow flex flex-col justify-center space-y-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-black/80 dark:text-light">{description}</p>
        <span className="font-semibold text-gray-700 dark:text-light/90">{link}</span>
      </div>
    </div>
  );
}
