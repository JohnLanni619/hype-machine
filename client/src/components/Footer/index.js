import "../../index.css"
import { Link } from 'react-router-dom';
const Footer = () => {
    return  (
        <footer>
            <ul className="footer-container">
                <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                <li>Group 5 &copy; 2021</li>
            </ul>
        </footer>
    );
};

export default Footer

