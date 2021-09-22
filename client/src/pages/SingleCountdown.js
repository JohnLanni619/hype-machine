import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { QUERY_COUNTDOWN } from "../utils/queries";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import auth from '../utils/auth';

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
        <div className="card-container countdown-card">
            <div className="card" key={countdown._id}>
                <div className="container countdown-container">
                    <p><b>{countdown.countdownTitle}</b></p> 
                        <p>Target date: {countdown.targetDate}</p>
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