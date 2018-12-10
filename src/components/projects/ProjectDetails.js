import React, { Component } from "react";

class ProjectDetails extends Component {
  render() {
    let id = this.props.match.params.id;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              accusantium iure. Sint velit reiciendis dignissimos perferendis
              enim beatae, id cupiditate voluptatum nesciunt at facilis maiores
              doloribus non unde totam quidem?
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p>Posted by The Net Ninja</p>
            <p>3rd oct 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
