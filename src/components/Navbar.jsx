import React from 'react';
import { NavLink } from 'react-router-dom';

const DownloadLink = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/sukalp_resume_resume.pdf'; // Replace with the actual path to your PDF file
    link.download = 'SukalpTripathi_resume.pdf'; // Replace with the desired file name
    link.click();
  };

  return (
    <NavLink to="#" onClick={handleDownload} className={({ isActive }) => isActive ? "text-black" : "text-blue-600" }>
      Download Resume
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className={"w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"}>
        <p className="blue-gradient_text">ST</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/blog' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Blog
        </NavLink>
        
        <DownloadLink />
      </nav>
    </header>
  );
};

export default Navbar;
