import React from 'react';
import './Progress.css'; // Create this CSS file for styles

const Progress = () => {
  return (
    <section className="progress-section">
      <div className="progress-box">
        <p>Module Progress: <span>90%</span></p>
      </div>
      <div className="progress-box">
        <p>Assignment Progress: <span>10%</span></p>
      </div>
      <div className="progress-box">
        <p>Attendance Progress: <span>97%</span></p>
      </div>
      <div className="progress-box">
        <p>Course Progress: <span>50%</span></p>
      </div>
    </section>
  );
};

export default Progress;
