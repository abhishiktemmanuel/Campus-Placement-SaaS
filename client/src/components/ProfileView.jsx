import React, { useState, useEffect } from 'react';







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
