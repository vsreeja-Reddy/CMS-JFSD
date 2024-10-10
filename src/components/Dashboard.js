import React from "react";
import "./Dashboard.css"; // Style according to your preference

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="user-info">
          <img
            src="proficon.jpeg" // Replace with actual path or user profile
            alt="Profile"
            className="profile-image"
          />
          <p className="user-name">Hi, Sreeja</p>
          <p className="user-id">2292129</p>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/courses">My Courses</a></li>
            <li><a href="/assignments">Assignments</a></li>
            <li><a href="/timetable">Time Table</a></li>
            <li><a href="/forum">Forum</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h2>Dashboard</h2>
        <p>Welcome Back, Sreeja</p>
        
        <div className="courses-container">
          <div className="courses">
            <img src="/mernlogo.png" alt="MERN Stack" />
            <img src="/pylogo.jpeg" alt="Python Full Stack" />
            <img src="/javalogo.png" alt="Java Full Stack" />
            <img src="/datalogo.jpg" alt="Data Science" />
            <img src="/devlogo.png" alt="DevOps" />
            <img src="/weblogo.avif" alt="Web Development" />
             
          </div>

          <div className="course-details">
            <div className="course">
              <p>MERN Stack</p>
              
            </div>
            <div className="course">
              <p>Python Full Stack</p>
           
            </div>
            <div className="course">
              <p>Java Full Stack</p>
             
            </div>
            <div className="course">
              <p>Data Science</p>
              
            </div>
            <div className="course">
              <p>DevOps</p>
              
            </div>
            <div className="course">
              <p>Web Development</p>
             
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-box">
            <p>Module Progress: 90%</p>
          
          </div>
          <div className="progress-box">
          <p>Assignment Progress: 10%</p>
          </div>
          
          <div className="progress-box">
            <p>Attendance Progress: 97%</p>
            
          </div>
          <div className="progress-box">
          <p>Course Progress: 50%</p>
            
          </div>
         
        </div>  
      </main>

      <div className="notifications">
        <span>🔔</span>
        <span>💬</span>
      </div>
    </div>
  );
};

export default Dashboard;
