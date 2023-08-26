import React from 'react';

export default function LicenseBox({ avatar, title, description, name, role }) {
  return (
    <div className="flex items-center p-6 flex-col border-2 border-tertiary rounded-xl">
      <div className="w-[100px] h-[100px] rounded-full p-1 border-2 border-tertiary">
        <img src={`images/avatars/avatar-${avatar}.jpg`} className="rounded-full" alt="avatar1" />
      </div>
      <div className="mt-5">
        <h2 className="heading-secondary">{title}</h2>
        <p className="paragraph text-center text-sm mt-2">{description}</p>
      </div>
      <div className="mt-9 text-center">
        <h5 className="text-sm">{name}</h5>
        <span className="text-black/70 text-xs">{role}</span>
      </div>
    </div>
  );
}
