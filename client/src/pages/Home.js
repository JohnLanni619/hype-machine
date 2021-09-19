import CountdownList from "../components/CountdownList";
import "../index.css"
import { useQuery } from "@apollo/client";
import { QUERY_COUNTDOWNS } from "../utils/queries";

const Home = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_COUNTDOWNS);
    const countdowns = data?.countdowns || [];
    console.log(countdowns);

    return  (
        <main>
            <div>
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <CountdownList countdowns={countdowns} title="Some Feed for Thought(s)..." />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home
