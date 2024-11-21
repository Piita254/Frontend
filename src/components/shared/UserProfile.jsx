import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function UserProfile({ userId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://e-learn-ncux.onrender.com/api/users/${userId}`);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{profile.name}'s Profile</h2>
      <p className="text-lg">
        <strong>XP:</strong> {profile.xp}
      </p>
      <p className="text-lg">
        <strong>Points:</strong> {profile.points}
      </p>
      <div className="mt-4">
        <h3 className="font-bold text-xl mb-2">Achievements</h3>
        <ul className="list-disc pl-5">
          {profile.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;