import React from 'react';
import { projects } from '../constants/projects';

function createProjectsDescs(descs) {
  if (descs === undefined) return null;
  return descs.map((desc, index) => {
    return <p key={index}>{desc}</p>;
    //return <p key={index}>{desc}</p>;
  });
}
function createProjects() {
  return projects.map((project, index) => {
    return (
      <dev key={index}>
        {project.title}
        <ul>
          {createProjectsDescs(project.descs)}
          <a href={project.src} style={{ color: 'white' }}>
            {project.srcDesc}
          </a>
        </ul>
        <br />
      </dev>
    );
  });
}

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <br />
      <p>{createProjects()}</p>
    </div>
  );
}
