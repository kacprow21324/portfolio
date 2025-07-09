import React from 'react';

export default function Projects() {
  const projects = [
    { id: 1, name: 'test', description: 'opis testowy' },
  ];

  return (
    <section className="p-6">
      <h1 className="text-2xl mb-4">Projekty</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <div key={p.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-medium">{p.name}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}