import { useState } from 'react'
import './App.css'

import ReactDOM from 'react-dom/client'
import {
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CardList from './components/card-scroll/CardScroller'
import Applications from './components/list'
import MenuBar from './components/Menu/SideMenu'
import JobDescription from './components/jobDescription'
import React from 'react';
import { Link } from 'react-router-dom';


function createData(imageSrc, jobRole, company, date, ctc, selected) {
  return { imageSrc, jobRole, company, date, ctc, selected };
}

const rows = [
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  createData('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 'Front Office', 'DeShaw & Co', '21 Aug 2023', '$ 21.5 L', '$ 21.5 L'),
  // Add more rows as needed
];

function App() {
  const [count, setCount] = useState(0)
  const cardsData = [
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Full-Time, Software Developer',
      company: 'Company A',
      status: 'Closed'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Part-Time, UI/UX Designer',
      company: 'Company B',
      status: 'Apply Now'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Full-Time, Software Developer',
      company: 'Company A',
      status: 'Closed'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Part-Time, UI/UX Designer',
      company: 'Company B',
      status: 'Apply Now'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Full-Time, Software Developer',
      company: 'Company A',
      status: 'Closed'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Part-Time, UI/UX Designer',
      company: 'Company B',
      status: 'Apply Now'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Full-Time, Software Developer',
      company: 'Company A',
      status: 'Closed'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Part-Time, UI/UX Designer',
      company: 'Company B',
      status: 'Apply Now'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Full-Time, Software Developer',
      company: 'Company A',
      status: 'Closed'
    },
    {
      image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
      title: 'Part-Time, UI/UX Designer',
      company: 'Company B',
      status: 'Apply Now'
    },
  ];

  const jobData = {
    title: "Software Engineer",
    summary: "We are looking for a Software Engineer to join our team.",
    tasks: [
      "Write clean, maintainable code.",
      "Participate in code reviews.",
      "Collaborate with cross-functional teams."
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Experience with React and Node.js.",
      "Strong problem-solving skills."
    ],
    workingConditions: "Office environment with remote work options.",
    salary: "Competitive salary and benefits package.",
    companyOverview: "We are an innovative tech company focused on creating software solutions."
  };



  return (
    <div className="flex ">
        <MenuBar/>
      <div className="overflow-hidden ">
            <CardList cards={cardsData} />
            <Applications rows={rows} />
            <JobDescription job={jobData} />
      </div>
    </div>
  );
}
export default App;

