import React from 'react';
import PropTypes from 'prop-types';

const JobDescription = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg  mx-auto my-8 m-5 ">
      <svg class="animate-bounce w-6 h-6 ...">
    </svg>
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-md mb-4">{job.summary}</p>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Responsibilities:</h2>
        <ul className="list-disc pl-5">
          {job.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Qualifications:</h2>
        <ul className="list-disc pl-5">
          {job.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Working Conditions:</h2>
        <p>{job.workingConditions}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Salary and Benefits:</h2>
        <p>{job.salary}</p>
        {/* List benefits if available */}
      </div>
      <div>
        <h2 className="text-2xl font-semibold">About the Company:</h2>
        <p>{job.companyOverview}</p>
      </div>
    </div>

  );
};
JobDescription.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    qualifications: PropTypes.arrayOf(PropTypes.string).isRequired,
    workingConditions: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    companyOverview: PropTypes.string.isRequired,
  }).isRequired,
}; 

export default JobDescription;
