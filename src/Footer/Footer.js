import React from 'react';
import SocialMeiaIcons from '../SocialMediaIcons/SocialMeiaIcons';

export default function Footer() {
  return (
    <footer className="relative dark:bg-dark-1">
      <div className="container flex flex-col items-center justify-center bg-white dark:bg-dark-1 dark:text-light">
        {/* image */}
        <div>
          <img
            src="images/mask.jpg"
            className="w-24 rounded-full object-fill border-8 border-gray-1 dark:border-dark-2 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
        {/* info */}
        <div className="mt-16 flex items-center justify-center flex-col gap-2.5 py-5">
          <h5>تپسی سوزا هستم</h5>

          <SocialMeiaIcons />

          <span className="text-xs text-black/70 dark:text-light/90 text-center">
            © کپی رایت 1402, تمامی حقوق محفوظ است
            <a
              href="https://www.rtl-theme.com/tapsi-html-template/"
              className="mr-1 font-sans font-semibold text-primary cursor-pointer hover:text-primary-2">
              Original Design Here
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
