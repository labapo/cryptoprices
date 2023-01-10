import { Link, NavLink } from "react-router-dom";

export default function Nav (props) {
    return (
        <div className = 'nav'>
            {/* first link */}
            <Link to='/'>
                <div>CRYPTO PRICES</div>
            </Link>
            {/* second link */}
            <Link to="/currencies">
                <div>CURRENCIES</div>
            </Link>
        </div>
    )
}