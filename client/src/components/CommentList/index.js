import React from "react";
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="text-light">Comments</span>
            </div>
            <div className="container comment-container">
                {comments &&
                    comments.map(comment => (
                        <p className="pill mb-3" key={comment._id}>
                            {comment.commentText} {' '}<br></br>
                            - <Link to={`/profile/${comment.username}`} style={{ fontWeight: 700 }}>
                                {comment.username} 
                            </Link> on {comment.createdAt}
                        </p>
                ))}
            </div>
        </div>
    );
};

export default CommentList;