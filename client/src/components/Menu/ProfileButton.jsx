import React, { useState, useEffect } from 'react';

// Assuming data is passed as props to the component
export const ProfileButton = ({ name, role, imageUrl, className = "" }) => {
  return (
    <div className={`relative w-[220px] h-[60px] bg-theme-mail-base-on-background rounded-[16px] overflow-hidden border border-solid border-theme-mail-base-line ${className}`}>
      <img className="absolute w-[36px] h-[36px] top-[12px] left-[12px]" alt="Profile" src={imageUrl} />
      <div className="absolute top-[13px] left-[60px] font-text-middle-15px-bold text-theme-mail-text-primary">
        {name}
      </div>
      <div className="absolute top-[35px] left-[60px] font-text-small-14px-regular text-theme-mail-text-secondary">
        {role}
      </div>
    </div>
  );
};