import React, { useState, useEffect, useRef } from 'react';
import JobDescription from './JobDescription';

function JobView({ job }) {
  // State to manage visibility
  const [isVisible, setIsVisible] = useState(true);

  // Ref for the JobDescription component
  const jobDescriptionRef = useRef(null);

  // Function to close the JobView component
  const closeJobView = () => setIsVisible(false);

  // Function to handle click outside
  const handleClickOutside = (event) => {
    if (jobDescriptionRef.current && !jobDescriptionRef.current.contains(event.target)) {
      closeJobView();
    }
  };

  useEffect(() => {
    // Add click event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start'>
      {/* Add ref to the JobDescription component */}
      <div ref={jobDescriptionRef}>
        <JobDescription job={job} />
      </div>
    </div>
  );
}

export default JobView;
