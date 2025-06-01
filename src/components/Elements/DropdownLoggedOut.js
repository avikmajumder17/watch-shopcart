import { Link } from "react-router-dom";

export const DropdownLoggedOut = () => {
    return (
        <ul className="header links">
            <li className="link authorization-link" data-label="or">
                <Link to="/login">
                    Login
                </Link>
            </li>

            <li>
                <Link to="/register" id="idBuBkprn6">
                    Register
                </Link>
            </li>
        </ul>
    )
}