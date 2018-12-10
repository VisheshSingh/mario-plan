import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class ProjectDetails extends Component {
  render() {
    let { project } = this.props;
    console.log(project);
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <p>
                Posted by {project.authorFirstname} {project.authorLastname}
              </p>
              <p>3rd Oct, 2018</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  let id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
