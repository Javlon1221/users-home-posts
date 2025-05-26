// App.jsx

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
import DetailPage from "./components/deatil-pages/DeatilPages.";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<DetailPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      <Footer />
    </Router>
  );
};

export default App;
