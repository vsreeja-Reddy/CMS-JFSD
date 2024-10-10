import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import  Courses from "./components/Courses";
import Timetable from "./components/Timetable";
import Assignments from "./components/Assignments"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
        <Route path="/courses" element={<Courses />} /> {/* Courses Route */}
        <Route path="/timetable" element={<Timetable />} /> {/* Timetable Route */}
        <Route path="/assignments" element={<Assignments />} /> {/* Assignments Route */}
      </Routes>
    </Router>
  );
};

export default App;
