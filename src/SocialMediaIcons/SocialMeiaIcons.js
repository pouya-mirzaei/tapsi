import React from 'react';

export default function SocialMeiaIcons() {
  return (
    <div className="flex justify-center lg:justify-start gap-x-2">
      <div className="w-10  p-2.5 bg-primary hover:bg-white border border-primary rounded-md cursor-pointer group transition-colors">
        <svg className="text-white group-hover:text-primary transition-colors">
          <use href="SVG/brands.svg#twitter"></use>
        </svg>
      </div>
      <div className="w-10  p-2.5 bg-primary hover:bg-white border border-primary rounded-md cursor-pointer group transition-colors">
        <svg className="text-white group-hover:text-primary transition-colors">
          <use href="SVG/brands.svg#instagram"></use>
        </svg>
      </div>
      <div className="w-10  p-2.5 bg-primary hover:bg-white border border-primary rounded-md cursor-pointer group transition-colors">
        <svg className="text-white group-hover:text-primary transition-colors">
          <use href="SVG/brands.svg#facebook"></use>
        </svg>
      </div>
      <div className="w-10  p-2.5 bg-primary hover:bg-white border border-primary rounded-md cursor-pointer group transition-colors">
        <svg className="text-white group-hover:text-primary transition-colors">
          <use href="SVG/brands.svg#pinterest"></use>
        </svg>
      </div>
    </div>
  );
}
