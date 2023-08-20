import React from 'react';

export default function SkillProgressBar({ name, progress }) {
  return (
    <div className="m-5">
      <h4 className="text-base mb-2.5">{name}</h4>

      <div className="w-full h-[5px] bg-[#edf2fa] relative">
        <div className="progress" style={{ width: progress + '%' }}>
          <span className="text-black/50 text-sm absolute left-0 -top-5">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
