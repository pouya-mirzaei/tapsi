import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-x-2 text-[14px] text-[#444746] font-medium">
        <li className="rounded-[30px] bg-primary text-white transition-colors">
          <a href="#" className="inline-block py-1.5 px-3.5">
            خانه
          </a>
        </li>
        <li className="rounded-[30px] hover:bg-primary hover:text-white transition-colors">
          <a href="#" className="inline-block py-1.5 px-3.5">
            درباره ما
          </a>
        </li>
        <li className="rounded-[30px] hover:bg-primary hover:text-white transition-colors">
          <a href="#" className="inline-block py-1.5 px-3.5">
            خدمات
          </a>
        </li>
        <li className="rounded-[30px] hover:bg-primary hover:text-white transition-colors">
          <a href="#" className="inline-block py-1.5 px-3.5">
            نمونه کار
          </a>
        </li>
        <li className="rounded-[30px] hover:bg-primary hover:text-white transition-colors">
          <a href="#" className="inline-block py-1.5 px-3.5">
            تماس با ما
          </a>
        </li>
      </ul>
    </nav>
  );
}
