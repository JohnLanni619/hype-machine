import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { QUERY_COUNTDOWN } from "../utils/queries";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import auth from '../utils/auth';
import Countdown from 'react-countdown';

const SingleCountdown = () => {
    const { id: countdownId } = useParams();

    const { loading, data } = useQuery(QUERY_COUNTDOWN, {
        variables: { id: countdownId }
    });

    const countdown = data?.countdown || {};

    if (loading) {
        return <div>Loading...</div>
    }

    const timeRemaining = countdown.targetDate;
    var integer = parseInt(timeRemaining, 10);


    return (
        <div className="card-container countdown-card">
            <div className="card" key={countdown._id}>
                <div className="container countdown-container">
                    <p><b>{countdown.countdownTitle}</b></p> 
                        Countdown: <Countdown date={integer} />
                        <p>
                            Created by 
                            <Link
                                to={`/profile/${countdown.username}`}
                                > {countdown.username} </Link> on {countdown.createdAt}
                        </p>
                </div>
            </div>
            
            {countdown.commentCount > 0 && <CommentList comments={countdown.comments} />}
            {auth.loggedIn() && <CommentForm countdownId={countdown._id} />}
            
        </div>
    );
};

export default SingleCountdown