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





// Assuming a fetchData function is available for fetching data from the backend
// This function should be adapted to your backend API
const fetchData = async () => {
  // Implement fetching logic here
  // For example, using fetch API or Axios to get data from your backend
};

export const ProfileCard = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setProfileData(data);
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
      }
    };

    getData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  // Render the profile card with dynamic data
  return (
    <div className="profile-card-container">
      {/* Dynamic data rendering based on fetched profileData */}
      <img src={profileData.imageUrl} alt="Profile" />
      <h2>{profileData.name}</h2>
      <p>{profileData.role}</p>
      {/* Additional profile information can be rendered here */}
    </div>
  );
};
