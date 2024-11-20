import React, { useState } from 'react';
import { MessageSquare, Reply } from 'lucide-react';

export function Comments({ pathId, comments = [] }) {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  // Placeholder user logic and functions
  const user = null; // Replace with actual user state logic
  const addComment = (pathId, content) => {
    console.log(`Add comment for path ${pathId}:`, content); // Replace with real logic
  };
  const addReply = (pathId, commentId, content) => {
    console.log(`Add reply to comment ${commentId} on path ${pathId}:`, content); // Replace with real logic
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!user || !newComment.trim()) {
      alert("Please log in and enter a valid comment.");
      return;
    }
    addComment(pathId, newComment);
    setNewComment('');
  };

  const handleSubmitReply = (commentId) => {
    if (!user || !replyContent.trim()) {
      alert("Please log in and enter a valid reply.");
      return;
    }
    addReply(pathId, commentId, replyContent);
    setReplyingTo(null);
    setReplyContent('');
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageSquare className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-bold">Comments</h2>
      </div>

      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            aria-label="New comment"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Post Comment
          </button>
        </form>
      ) : (
        <p className="text-gray-600 mb-8">Please log in to comment.</p>
      )}

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{comment.userName}</h4>
                  <p className="text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
                {user && (
                  <button
                    onClick={() => setReplyingTo(comment.id)}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-1"
                    aria-label={`Reply to comment by ${comment.userName}`}
                  >
                    <Reply className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                )}
              </div>
              <p className="text-gray-700 mb-4">{comment.content}</p>

              {replyingTo === comment.id && (
                <div className="ml-8 mb-4">
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write a reply..."
                    aria-label="Reply content"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows={2}
                  />
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() => handleSubmitReply(comment.id)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => setReplyingTo(null)}
                      className="text-gray-600 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {comment.replies?.length > 0 && (
                <div className="ml-8 mt-4 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {reply.userName}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {formatDate(reply.createdAt)}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}

export default Comments;