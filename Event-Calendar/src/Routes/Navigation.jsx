import { Link } from "react-router-dom";

function Navigator() {
    return (
        <div className="navBar">
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav_link">
                            DashBoard
                        </Link>
                    </li>
                    <li>
                        <Link to="/AddEvent" className="nav_link">
                            Add Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/NewAccount" className="nav_link">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/Help" className="nav_link">
                            Help
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigator;