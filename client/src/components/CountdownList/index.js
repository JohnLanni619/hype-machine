import React from 'react';

const CountdownList = ({ countdowns, title }) => {
    if (!countdowns.length) {
        return <h3>No Countdowns Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {countdowns &&
                countdowns.map(countdown => (
                    <div key={countdown._id}>
                        <p>
                            {countdown.username}
                            countdown on {countdown.createdAt}
                        </p>
                        <div>
                            <p>{countdown.countdownTitle}</p>
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