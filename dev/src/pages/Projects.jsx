import React from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <div className="projects-page">
      <ProjectCarousel projects={projects} />
    </div>
  );
}