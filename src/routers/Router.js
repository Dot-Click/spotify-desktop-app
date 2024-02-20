import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.js";
import Home from "../pages/Home.js";
import AuthLayout from "../layouts/AuthLayout.js";
import Register from "../components/auth/Register.js";
import Login from "../components/auth/Login.js";
import NotFound from "../pages/PageNotFound.js";

const Router = () => {
  // use protected routes for authenticated users (i.e: UserRoute & AdminRoute or make more if you've to)..

  return (
    <Routes>
      {/* Default Layout routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>

      {/* Not found page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
