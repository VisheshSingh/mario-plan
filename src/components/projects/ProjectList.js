import React from "react";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title 1</span>
          <p>Posted by The Net Ninja</p>
          <p className="grey-text">3rd Oct 2018</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title 2</span>
          <p>Posted by The Angular Avenger</p>
          <p className="grey-text">5th Oct 2018</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project title 3</span>
          <p>Posted by The Vue Wizard</p>
          <p className="grey-text">10th Oct 2018</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
