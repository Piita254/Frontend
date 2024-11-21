import React from 'react';
import { UserProfile } from './UserProfile';
import { Leaderboard } from './Leaderboard';
import { Footer } from './Footer';


export function Dashboard({ userId }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-6 space-y-8">
        <UserProfile userId={userId} />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
}
