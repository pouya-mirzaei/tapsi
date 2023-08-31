import React from 'react';

export default function Form() {
  return (
    <div className="basis-7/12 bg-white dark:bg-dark-1 dark:text-light rounded-xl border-2 dark:border border-tertiary p-10 self-stretch">
      {/* title */}

      <div>
        <h2 className="text-3xl font-medium tracking-tighter">ایده ای دارید؟ با ما هم تیم شوید.</h2>
        <p className="text-black/70 mt-2 text-base tracking-tight">بیشتر درباره خودتان و ایده هایتان به ما بگویید.</p>
      </div>

      {/* form */}
      <form className="grid grid-cols-2 gap-10 mt-10" autoComplete="off">
        <div className="col-span-full md:col-span-1">
          <label className="block text-xs text-black/80 mb-2" htmlFor="firstname">
            اسم کوچک
          </label>
          <input type="text" id="firstname" className="text-input dark:bg-dark-1" placeholder="اسم *" />
        </div>
        <div className="col-span-full md:col-span-1">
          <label className="block text-xs text-black/80 mb-2" htmlFor="email">
            ایمیل شما
          </label>
          <input type="text" id="email" className="text-input dark:bg-dark-1" placeholder="ایمیل *" />
        </div>
        <div className="col-span-full">
          <label className="block text-xs text-black/80 mb-2" htmlFor="subject">
            موضوع
          </label>
          <input type="text" id="subject" className="text-input dark:bg-dark-1" placeholder="موضوع *" />
        </div>
        <div className="col-span-full">
          <label className="block text-xs text-black/80 mb-2" htmlFor="message">
            پیام شما
          </label>
          <textarea
            placeholder="پیام شما *"
            id="message"
            className="border-2 dark:border w-full outline-primary py-2.5 px-3 dark:bg-dark-1"
            rows={4}
          />
        </div>
        <div className="col-span-full">
          <input type="submit" value={'ارسال پیام'} className="submit" />
        </div>
      </form>
    </div>
  );
}
