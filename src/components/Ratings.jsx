import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Ratings({ pathId, ratings, currentRating, user, addRating }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleRatingSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert('You must be logged in to submit a review!');
      return;
    }
    if (!rating) {
      alert('Please select a rating!');
      return;
    }

    // Submit the rating
    addRating(pathId, { rating, review })
      .then(() => {
        setRating(0);
        setReview('');
        setShowReviewForm(false);
      })
      .catch((err) => console.error('Error submitting rating:', err));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Rating Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <h2 className="text-xl font-bold">
            {currentRating.toFixed(1)} ({ratings.length} ratings)
          </h2>
        </div>
        {user && !showReviewForm && (
          <button
            onClick={() => setShowReviewForm(true)}
            className="text-indigo-600 hover:text-indigo-700"
          >
            Write a Review
          </button>
        )}
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <form onSubmit={handleRatingSubmit} className="space-y-4">
          {/* Star Rating */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-8 w-8 ${
                    (hover || rating) >= value
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Review Textarea */}
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience with this learning path..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={3}
          />

          {/* Form Buttons */}
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Existing Ratings */}
      <div className="space-y-4">
        {ratings.map((rating, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              {[...Array(rating.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">{rating.review}</p>
            <small className="text-gray-500">— {rating.user} on {formatDate(rating.date)}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
