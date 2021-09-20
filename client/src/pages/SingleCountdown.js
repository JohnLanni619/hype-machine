import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { QUERY_COUNTDOWN } from "../utils/queries";

const SingleCountdown = () => {
    const { id: countdownId } = useParams();

    const { loading, data } = useQuery(QUERY_COUNTDOWN, {
        variables: { id: countdownId }
    });

    const countdown = data?.countdown || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
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
    );
};

export default SingleCountdown