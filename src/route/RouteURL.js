import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/navbar/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Account from "../pages/Account";
import ProtectedRoute from "./ProtectedRoute";
function RouteURL() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default RouteURL;
