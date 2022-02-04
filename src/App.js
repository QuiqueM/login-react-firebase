import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Login from "./componets/Login";
import { ProtectedRoute } from "./componets/ProtectedRoutes";
import Register from "./componets/Register";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
