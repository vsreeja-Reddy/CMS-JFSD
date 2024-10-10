import React, { useState } from "react";
import "./Courses.css"; // Ensure your styles are defined here

const Dashboard = () => {
  const [showCourses, setShowCourses] = useState(false); // State to toggle course visibility

  const courses = [
    { name: "MERN Stack", code: "MSWD/01" },
    { name: "Python Full Stack", code: "PFSD/01" },
    { name: "Java Full Stack", code: "JFSD/01" },
  ];

  const modules = [
    { name: "Module 01", topic: "Programming", unit: "Unit 01", status: "Completed" },
    { name: "Module 02", topic: "Networking", unit: "Unit 01", status: "Ongoing" },
    { name: "Module 03", topic: "Database", unit: "Unit 01", status: "Pending" },
    { name: "Module 04", topic: "Professional Practice", unit: "Unit 01", status: "Pending" },
  ];

  const handleCoursesToggle = () => {
    setShowCourses(!showCourses); // Toggle the visibility of courses
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="user-info">
          <img
            src="path_to_profile_image" // Replace with actual path or user profile
            alt="Profile"
            className="profile-image"
          />
          <p className="user-name">Hi,Sreeja</p>
          <p className="user-id">2292129</p>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><button onClick={handleCoursesToggle} className="menu-button">My Courses</button></li>
            <li><a href="/assignments">Assignments</a></li>
            <li><a href="/timetable">Time Table</a></li>
            <li><a href="/forum">Forum</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {showCourses && ( // Render courses only if showCourses is true
          <div>
            <h2>My Courses</h2>
            
            <div className="courses-container">
              {courses.map((course, index) => (
                <div key={index} className="course-card">
                  <h3>{course.name}</h3>
                  <p>{course.code}</p>
                </div>
              ))}
            </div>

            <div className="semester-container">
              <h3>Semester 01</h3>
              <table className="modules-table">
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Topic</th>
                    <th>Unit</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((module, index) => (
                    <tr key={index}>
                      <td>{module.name}</td>
                      <td>{module.topic}</td>
                      <td>{module.unit}</td>
                      <td>{module.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        )}
      </main>

      <div className="notifications">
        <span>🔔</span>
        <span>💬</span>
      </div>
    </div>
  );
};

export default Dashboard;
