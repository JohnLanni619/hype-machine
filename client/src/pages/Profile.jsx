import { useParams } from 'react-router-dom';
import CountdownList from '../components/CountdownList';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import CountdownForm from '../components/CountdownForm';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
            <div>
                <h2 className="profile-name">
                    {user.username}'s Profile
                </h2>
            </div>
            <div>{!userParam && <CountdownForm/>}</div>

            <div>
                <div>
                    <CountdownList countdowns={user.countdowns}/>
                </div>
            </div>
            
        </div>
    );
};

export default Profile