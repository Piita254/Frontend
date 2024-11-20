import React, { useState } from 'react';
import Ratings from './Ratings';
import Comments from './Comments';

export default function ResourcePage({ resource, user, apiEndpoint }) {
  const [currentRating, setCurrentRating] = useState(resource.initialRating || 0);

  const handleRating = (value) => {
    fetch(`'https://e-learn-ncux.onrender.com`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: value, user }),
    })
      .then((response) => response.json())
      .then((updatedResource) => setCurrentRating(updatedResource.rating))
      .catch((err) => console.error('Error rating resource:', err));
  };

  return (
    <div>
      <h1>{resource.title}</h1>
      <p>{resource.description}</p>

      {/* Rating Component */}
      <div className="mt-4">
        <h2>Rate this Resource</h2>
        <Rating initialRating={currentRating} onRate={handleRating} />
      </div>

      {/* Comments Component */}
      <div className="mt-6">
        <h2>Comments</h2>
        <Comments resourceId={resource.id} user={user} apiEndpoint={apiEndpoint} />
      </div>
    </div>
  );
}
