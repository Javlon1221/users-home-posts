import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./style.css"

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='flex'>
        <div className='w-[250px] h-screen bg-slate-900 p-4 text-white'>
            <h2 className='text-xl font-bold mb-4'>Dashboard</h2>
            <div>
                <NavLink 
                  to="" 
                  end 
                  className={({ isActive }) => 
                    `block mb-1 p-2 rounded sidebar-link ${isActive ? 'active' : ''}`
                  }
                >Group</NavLink>

                <NavLink 
                  to="student" 
                  className={({ isActive }) => 
                    `block mb-1 p-2 rounded sidebar-link ${isActive ? 'active' : ''}`
                  }
                >Student</NavLink>

                <NavLink 
                  to="profile" 
                  className={({ isActive }) => 
                    `block mb-1 p-2 rounded sidebar-link ${isActive ? 'active' : ''}`
                  }
                >Profile</NavLink>
                <NavLink 
                  to="admin" 
                  className={({ isActive }) => 
                    `block mb-1 p-2 rounded sidebar-link ${isActive ? 'active' : ''}`
                  }
                >Admin</NavLink>
                <NavLink 
                  to="products" 
                  className={({ isActive }) => 
                    `block mb-1 p-2 rounded sidebar-link ${isActive ? 'active' : ''}`
                  }
                >Product</NavLink>
                <NavLink 
                  to="Posts" 
                  className={({ isActive }) => 
                    `block mb-1 p-2 rounded sidebar-link ${isActive ? 'active' : ''}`
                  }
                >Posts</NavLink>


                <button 
                  onClick={() => navigate("/")}
                  className="mt-4 block w-full bg-slate-700 p-2 rounded hover:bg-slate-600 transition"
                >
                  ⬅ Back to Home
                </button>
            </div>
        </div>
        <div className='flex-1 '>
          <div className='w-full h-16 bg-slate-900'></div>
          <div className='p-4'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
