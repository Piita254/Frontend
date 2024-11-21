import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Crowdsourced Learning Platform. All rights reserved.</p>
        <nav className="mt-4">
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/leaderboard" className="mx-2 hover:underline">Leaderboard</a>
          <a href="/profile" className="mx-2 hover:underline">Profile</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;