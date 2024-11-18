import React from 'react';
import { Trophy, Medal } from 'lucide-react';

function LeaderBoard() {
  const topUsers = [
    { id: 1, name: 'Sarah Chen', points: 12500, badge: 'Master Contributor' },
    { id: 2, name: 'Alex Kumar', points: 11200, badge: 'Learning Champion' },
    { id: 3, name: 'Maria Garcia', points: 10800, badge: 'Knowledge Seeker' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Leaderboard</h1>
        <p className="text-gray-600">Top contributors and learners in our community</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          {topUsers.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center justify-between py-4 border-b last:border-0"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${index === 0 ? 'bg-yellow-100 text-yellow-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                      'bg-orange-100 text-orange-600'}`}>
                  <Medal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{user.name}</h3>
                  <span className="text-sm text-gray-500">{user.badge}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-indigo-600">{user.points}</span>
                <span className="text-gray-500 ml-1">pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LeaderBoard;