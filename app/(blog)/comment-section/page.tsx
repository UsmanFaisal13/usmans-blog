'use client';
import { useState, useEffect } from 'react';

interface Comment {
    id: number;
    name: string;
    comment: string;
    date: string;
}

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    // Load comments from localStorage on component mount
    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    // Save comments to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !comment.trim()) return;

        const newComment: Comment = {
            id: Date.now(),
            name: name,
            comment: comment,
            date: new Date().toLocaleDateString()
        };

        setComments([newComment, ...comments]);
        setName('');
        setComment('');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8">Comments</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12 bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Post Comment
                </button>
            </form>

            {/* Comments Display */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">{comment.name}</h3>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-700 whitespace-pre-wrap">{comment.comment}</p>
                    </div>
                ))}

                {comments.length === 0 && (
                    <p className="text-center text-gray-500 py-8">
                        No comments yet. Be the first to comment!
                    </p>
                )}
            </div>
        </div>
    );
}