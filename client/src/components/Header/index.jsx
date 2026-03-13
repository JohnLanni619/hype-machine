import "../../index.css"
import { GoFlame } from 'react-icons/go';


const Header = () => {
    return (
        <div>
            <a href="/home">
                <GoFlame></GoFlame>
                <h1>HYPE-MACHINE</h1>
                <GoFlame></GoFlame>
            </a>

        </div>
    );
};

export default Header
