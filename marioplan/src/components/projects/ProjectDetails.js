import React from "react";

const ProjectDetails = props => {
  //console.log(props);
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            temporibus nihil maiores voluptates tenetur blanditiis beatae, earum
            vero nisi optio aspernatur rerum perspiciatis magni! Sequi beatae
            error aut dolor reprehenderit?
          </p>
          <div className="card-action grey-ligthen-4 grey-text">
            <div>Posted by...</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
