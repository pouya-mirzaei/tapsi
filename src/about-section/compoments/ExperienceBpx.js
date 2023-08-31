import React from 'react';

export default function ExperienceBpx() {
  return (
    <div className="w-full bg-white dark:bg-dark-1 dark:text-light border-2 dark:border border-tertiary rounded-xl pl-5 py-2.5 pr-[70px] relative">
      <div className="w-5 text-primary absolute top-5 right-5">
        <svg>
          <use href="SVG/solid.svg#toolbox"></use>
        </svg>
      </div>
      <span className="text-black/80 dark:text-light text-xs inline-block mb-2.5">1402 - زمان حال</span>
      <h5 className="mb-2.5 font-semibold">کارگردان هنری - شرکت فیسبوک</h5>
      <p className="paragraph text-md">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
      </p>
    </div>
  );
}
