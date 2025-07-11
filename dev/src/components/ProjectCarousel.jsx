import React, { useState, useEffect } from 'react';

export default function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const project = projects[currentIndex];

  return (
    <div className="project-carousel">
      <button onClick={handlePrev} aria-label="Poprzedni projekt">{'<'}</button>
      <div className="slide">
        <img
          src={project.imageSrc}
          alt={`${project.title} screenshot`}
          loading="lazy"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul>
          {project.techStack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Zobacz projekt
        </a>
      </div>
      <button onClick={handleNext} aria-label="Następny projekt">{'>'}</button>
    </div>
  );
}