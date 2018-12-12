import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = props => {
  const { projects } = props;
  let projectList = projects ? (
    projects.map(project => {
      return (
        <Link to={"/projects/" + project.id} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      );
    })
  ) : (
    <p>No projects at this time...</p>
  );
  return <div className="project-list section">{projectList}</div>;
};

export default ProjectList;
