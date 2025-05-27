import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./style.css";

const Student = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Students</h2>
      <div className='flex gap-4 py-4'>
        <NavLink to={""} end className="student-bars">Active</NavLink>
        <NavLink to={"graduated-student"} className="student-bars">Graduated</NavLink>
        <NavLink to={"inactive"} className="student-bars">Inactive</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Student;
