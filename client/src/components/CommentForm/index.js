import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ countdownId }) => {
    const [commentText, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 300) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentText, countdownId }
            });

            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="card-container comment-form">
            <div className="card login-container">
                <p value={characterCount}>
                    Character Count: {characterCount}/300
                </p>
                <form className="user-form" onSubmit={handleFormSubmit}>
                    <textarea
                        value={commentText}
                        placeholder="Leave some hype for this countdown!"
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">
                        submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;