import { useParams } from 'react-router-dom';
import CountdownList from '../components/CountdownList';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <h2>
                    Viewing {user.username}'s Profile.
                </h2>
            </div>

            <div>
                <div>
                    <CountdownList countdowns={user.countdowns} title={`${user.username}'s countdowns...`}/>
                </div>
            </div>
        </div>
    );
};

export default Profile