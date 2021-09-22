import React from 'react';
import { Link } from 'react-router-dom';

const CountdownList = ({ countdowns, title }) => {
    if (!countdowns.length) {
        return <h3 className="no-countdowns">No Countdowns Yet</h3>;
    }

    return (
        <div>
            <h3 className="home-title">{title}</h3>
            <div className="card-container">
            {countdowns &&
                countdowns.map(countdown => (
                    <div className="card" key={countdown._id}>
                        <div className="container countdown-container">
                            <p><b>
                            <Link to={`/countdown/${countdown._id}`}>
                                    {countdown.countdownTitle}
                                </Link>
                            </b></p> 
                            <p>Target date: {countdown.targetDate}</p>
                            <p>
                                Created by <Link
                                    to={`/profile/${countdown.username}`}
                                    style={{ fontWeight: 700 }}
                                    className="text-light"
                                >
                                {countdown.username}
                                </Link>{' '}
                                on {countdown.createdAt} 
                            </p>
                            <p>
                                Comments: {countdown.commentCount} || 
                                <Link
                                    to={`/countdown/${countdown._id}`}
                                    > Click to{' '}
                                {countdown.commentCount ? 'see' : 'start'} the discussion!
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
};

export default CountdownList;