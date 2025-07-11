import React, { useState, useMemo } from 'react';
import certificates from '../data/certificates.json';

export default function CertificateList() {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('year');
  const [filterCategory, setFilterCategory] = useState('all');

  const filtered = useMemo(() => {
    return certificates
      .filter(cert =>
        (filterCategory === 'all' || cert.category === filterCategory) &&
        cert.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sortKey === 'year') return b.year - a.year;
        if (sortKey === 'issuer') return a.issuer.localeCompare(b.issuer);
        if (sortKey === 'category') return a.category.localeCompare(b.category);
        return 0;
      });
  }, [search, sortKey, filterCategory]);

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Szukaj certyfikat..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.5rem', flexGrow: 1, minWidth: '150px' }}
        />
        <button onClick={() => setSortKey('year')} style={{ padding: '0.5rem' }}>
          Sortuj rok
        </button>
        <button onClick={() => setSortKey('issuer')} style={{ padding: '0.5rem' }}>
          Sortuj wydawcę
        </button>
        <button onClick={() => setSortKey('category')} style={{ padding: '0.5rem' }}>
          Sortuj kategorię
        </button>
      </div>

      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button onClick={() => setFilterCategory('all')} style={{ padding: '0.5rem' }}>
          Wszystkie
        </button>
        <button onClick={() => setFilterCategory('network')} style={{ padding: '0.5rem' }}>
          Sieci
        </button>
        <button onClick={() => setFilterCategory('general')} style={{ padding: '0.5rem' }}>
          Ogólne IT
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(cert => (
          <li
            key={cert.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <span style={{ width: '2rem', fontWeight: 'bold', flexShrink: 0 }}>{cert.id}.</span>
            <img
              src={cert.logo}
              alt={cert.name}
              style={{ width: '2rem', height: '2rem', objectFit: 'contain', flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 'bold', overflowWrap: 'break-word', whiteSpace: 'normal' }}>
                {cert.name}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>
                {cert.issuer} • {cert.year}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
