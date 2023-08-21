import React from 'react';
import ContactBox from './Contact-box';
import SkillProgressBar from './SkillProgressBar';

export default function Sticky() {
  return (
    <div className="basis-7/12 lg:sticky top-20 self-start">
      {/* resume */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* image */}
        <div className="basis-3/5 rounded-2xl overflow-hidden">
          <img src="images/about-banner.jpg" alt="nice lady" />
        </div>

        {/* links */}
        <div className="basis-2/5 flex flex-col gap-y-5">
          <ContactBox text="با اسکایپ بهم زنگ بزن" icon={{ name: 'skype', type: 'brands' }}></ContactBox>
          <ContactBox text="بهم ایمیل بزن" icon={{ name: 'envelope', type: 'solid' }}></ContactBox>
          <ContactBox text="در واتساپ بهم پیام بده" icon={{ name: 'whatsapp', type: 'brands' }}></ContactBox>
          <ContactBox text="ملاقات با من" icon={{ name: 'map', type: 'solid' }}></ContactBox>
          <ContactBox text="رزومه" icon={{ name: 'file-pdf', type: 'solid' }}></ContactBox>
        </div>
      </div>

      {/* skills */}
      <div className="space-y-5">
        <h3 className="heading-tertairy title mt-20 mb-[30px]">مهارت ها</h3>
        <SkillProgressBar name="HTML5" progress={92}></SkillProgressBar>
        <SkillProgressBar name="وردپرس" progress={75}></SkillProgressBar>
        <SkillProgressBar name="مجتنو" progress={86}></SkillProgressBar>
        <SkillProgressBar name="UI/UX" progress={88}></SkillProgressBar>
      </div>
    </div>
  );
}
