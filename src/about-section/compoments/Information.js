import React from 'react';

export default function Information() {
  return (
    <div className="basis-5/12">
      {/* introduction */}
      <div>
        <h3 className="heading-tertairy title mb-6">درباره من</h3>
        <span className="font-semibold inline-block mb-2">اسم من تپسی سوزاست</span>
        <h2 className="font-semibold text-3xl mb-6">من برای پروژه بعدی شما در دسترس هستم</h2>
        <p className="paragraph mb-4">
          متولد 1370، ساکن در اصفهان. ما طراحی روی صفحه را برای وب‌سایت‌ها و برنامه‌ها و همچنین اجرای جلویی ارائه
          می‌کنیم. ما به دنبال طیف گسترده ای از عبارات و کدهای بهتر هستیم. با "لایک" کردن ادامه دهید.
        </p>
        <div className="flex items-start justify-around">
          <div className="flex items-center gap-x-2.5">
            <span className="text-4xl font-semibold">5 هزار</span>
            <span className="leading-normal w-2/5 text-black/80">پروژه تکمیل شده.</span>
          </div>
          <div className="flex items-center gap-x-2.5">
            <span className="text-4xl font-semibold">3 هزار</span>
            <span className="leading-normal w-2/5 text-black/80">مشتریان راضی.</span>
          </div>
        </div>
      </div>

      {/* experience */}
      <div></div>
    </div>
  );
}
