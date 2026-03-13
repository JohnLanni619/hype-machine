import CountdownList from "../components/CountdownList";
import "../index.css"
import { useQuery } from "@apollo/client";
import { QUERY_COUNTDOWNS } from "../utils/queries";

const Home = () => {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_COUNTDOWNS);
    const countdowns = data?.countdowns || [];

    return  (
        <main>
            <div>
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <CountdownList countdowns={countdowns} title="Bring on the hype!" />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home
