import React from 'react';

export default function ContactBox() {
  return (
    <div className="flex items-center gap-x-2.5 bg-white hover:bg-primary border-2 border-[#e1e3e1] hover:border-primary text-[#444746] hover:text-white rounded-xl py-3 px-4 cursor-pointer transition-colors">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-2 rounded-full ">
        <svg className="w-1/2 text-black">
          <use href="SVG/brands.svg#skype"></use>
        </svg>
      </div>
      <div>
        <span>با اسکایپ بهم زنگ بزن</span>
      </div>
    </div>
  );
}
