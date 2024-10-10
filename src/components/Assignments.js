import React from "react";
import "./Assignments.css"; // Style according to your preference

const Dashboard = () => {
  // Sample assignments data
  const assignments = [
    { title: "React Basics", dueDate: "2024-10-05", status: "Pending" },
    { title: "JavaScript Advanced", dueDate: "2024-10-10", status: "Completed" },
    { title: "CSS Flexbox", dueDate: "2024-10-15", status: "Ongoing" },
    { title: "Node.js Introduction", dueDate: "2024-10-20", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="user-info">
          <img
            src="path_to_profile_image" // Replace with actual path or user profile
            alt="Profile"
            className="profile-image"
          />
          <p className="user-name">Hi, Sreeja</p>
          <p className="user-id">2292129</p>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="/home">Home</a></li>
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
        
        {/* Courses Section */}
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

        {/* Progress Section */}
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

        {/* Assignments Section */}
        <div className="assignments-section">
          <h3>My Assignments</h3>
          <table className="assignments-table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.title}</td>
                  <td>{assignment.dueDate}</td>
                  <td>{assignment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
