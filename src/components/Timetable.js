import React from "react";
import "./Timetable.css"; // Make sure you style it properly

const TimeTable = () => {
  return (
    <div className="timetable-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-info">
          <img src="profile_image_path" alt="Profile" className="profile-image" />
          <p className="user-name">Hi,Sreeja</p>
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

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h2>Time Table</h2>
          <div className="header-icons">
            <span role="img" aria-label="notifications">🔔</span>
            <span role="img" aria-label="messages">💬</span>
          </div>
        </header>

        {/* Buttons */}
        <div className="buttons-container">
          <button className="btn live-class-btn">Live Class</button>
          <button className="btn recorded-class-btn">Recorded Class</button>
        </div>

        {/* Time Table */}
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Lecture Name</th>
              <th>Subject</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="profile_image_url" alt="" className="lecture-image" />
                Sreeja <span>🇮🇳</span>
              </td>
              <td>English</td>
              <td>9:00 AM</td>
              <td>1:00 PM</td>
              <td>20.10.2023</td>
            </tr>
            <tr>
              <td>
                <img src="profile_image_url" alt="" className="lecture-image" />
                Bindhu <span>🇮🇳</span>
              </td>
              <td>Operating System</td>
              <td>10:00 AM</td>
              <td>8:00 PM</td>
              <td>27.10.2023</td>
            </tr>
            <tr>
              <td>
                <img src="profile_image_url" alt="" className="lecture-image" />
                Kavya <span>🇮🇳</span>
              </td>
              <td>Java Full Stack</td>
              <td>10:00 AM</td>
              <td>9:30 PM</td>
              <td>30.10.2023</td>
            </tr>
            {/* Repeat for other rows */}
          </tbody>
        </table>

        <div className="pagination">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </main>
    </div>
  );
};

export default TimeTable;
