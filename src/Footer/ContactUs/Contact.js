import React from 'react';
import ContactBox from './ContactBox';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: [
        {
          icon: { type: 'hero', name: 'message' },
          title: 'با ما در ارتباط باشید',
          description: 'تیم ما برای کمک به شما اینجاست.',
          link: 'info@domainname.com',
        },
        {
          icon: { type: 'regular', name: 'compass' },
          title: 'ملاقات با ما',
          description: 'به دفتر مرکزی ما بیایید.',
          link: 'اصفهان، خیابان 12 - کوچه 21',
        },
        {
          icon: { type: 'hero', name: 'mobile' },
          title: 'تماس با ما',
          description: 'شنبه تا چهارشنبه از ساعت 8 تا 5.',
          link: '+01 (555) 000-0000',
        },
      ],
    };
  }

  render() {
    return (
      <div className="basis-5/12">
        <h2 className="text-[1.5rem] font-semibold mb-5">بیایید تا پروژه شما را مورد بحث قرار دهیم</h2>
        <ContactBox {...this.state.contactInfo[0]} />
        <ContactBox {...this.state.contactInfo[1]} />
        <ContactBox {...this.state.contactInfo[2]} />
      </div>
    );
  }
}
