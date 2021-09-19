import React from 'react';

const CountdownList = ({ countdowns, title }) => {
    if (!countdowns.length) {
        return <h3>No Countdowns Yet</h3>;
    }

    return (
        <div>
            <h3 className="home-title">{title}</h3>
            {countdowns &&
                countdowns.map(countdown => (
                    <div className="card" key={countdown._id}>
                        <div className="container">
                            <p><b>{countdown.countdownTitle}</b></p> 
                            <p>Target date: {countdown.targetDate}</p>
                            <p>
                                Created by {countdown.username} on {countdown.createdAt}
                            </p>
                            <p>
                                Comments: {countdown.commentCount} || Click to{' '}
                                {countdown.commentCount ? 'see' : 'start'} the discussion!
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CountdownList;