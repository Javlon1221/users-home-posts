import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";
import Posts from "./components/posts/Posts";
import Users from "./components/Cards/Cards";
import NotFound from "./components/404notfound/NotFound";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import DetailPage from "./components/deatil-pages/DeatilPages.";

import DashboardLayout from "./components/dashboard/DashboardLayout";
import Group from "./components/dashboard/group/Group";
import Profile from "./components/dashboard/profile/Profile";
import Student from "./components/dashboard/student/Student";
import ActiveStudent from "./components/dashboard/student/ActiveStudent";
import GraduatedStudent from "./components/dashboard/student/GraduatedStudent";
import DetailPage from "./components/deatil-pages/DeatilPages."; // <-- tuzatilgan
import Admin from "./components/dashboard/admin/Admin";
import Products from "./components/dashboard/products/Products";

const InnerLayout = ({ children }) => (
  <div className="flex min-h-screen">
    <div className="flex-1 p-6">{children}</div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<InnerLayout><DetailPage /></InnerLayout>} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Group />} />
            <Route path="student" element={<Student />}>
              <Route index element={<ActiveStudent />} />
              <Route path="graduated-student" element={<GraduatedStudent />} />
              <Route path="inactive" element={<div>Inactive</div>} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="admin" element={<Admin/>} />
            <Route path="products" element={<Products/>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
      <Footer />
    </Router>
  );
};

export default App;
