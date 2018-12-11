import React from "react";

const ProjectSummary = props => {
  const { project } = props;
  return (
    <div className="card z-depth-0 project-details">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">3rd Oct 2018</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
