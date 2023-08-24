import React from 'react';

export default function ProjectBox({ img }) {
  return (
    <div className="rounded-xl bg-white p-2.5 border-2 border-[#e1e3e1] relative group">
      <div className="rounded-xl overflow-hidden ">
        <img src={`images/portofilo/project-${img}.jpg`} alt={`project ${img}`} />

        {/* add  */}
        <div className="absolute top-5 left-5 w-10 h-10 p-2.5 rounded-full bg-primary hover:bg-white text-white hover:text-black border-2 border-primary cursor-pointer transition-all">
          <svg>
            <use href="SVG/solid.svg#plus"></use>
          </svg>
        </div>
        {/* description  */}
        <div className="rounded-xl bg-gray-1 p-5 border-2 border-[#e1e3e1] absolute z-20 bottom-0 group-hover:bottom-5 left-[5%] right-[5%] w-[90%] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* title */}

            <div>
              <h3 className="text-base font-medium">طراحی برنامه گوشی</h3>
              <p className="paragraph text-xs">برنامه گوشی و طراحی برنامه</p>
            </div>

            {/* icon */}
            <div className="w-8 h-8 bg-primary rounded-full p-2 text-white cursor-pointer">
              <svg>
                <use href="SVG/hero.svg#arrow-up-left"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
