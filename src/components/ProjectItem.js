import React from "react";

const ProjectItem=({project})=>{
  console.log({project})

    const technos=project.technologies.map((technology) =>{
      return <span key={technology}>{technology}</span>})
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
       {technos}
      </div>
    </div>
  );
}

export default ProjectItem;


