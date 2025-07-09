import React from 'react';

export default function Certificates() {
  const certs = [
    { id: 1, title: 'test1', issuer: 'x', year: 2023 },
  ];

  return (
    <section className="p-6">
      <h1 className="text-2xl mb-4">Certyfikaty</h1>
      <ul className="list-disc list-inside">
        {certs.map(c => (
          <li key={c.id}>
            <strong>{c.title}</strong> - {c.issuer}, {c.year}
          </li>
        ))}
      </ul>
    </section>
  );
}