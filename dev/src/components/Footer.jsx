import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 text-center text-sm text-gray-600 border-t">
      <p>© {new Date().getFullYear()} Kacper Woszczyło. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
}