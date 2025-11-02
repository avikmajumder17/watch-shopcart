import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const DropdownLoggedIn = () => {
    const [toggleLoggeIn, setToggleLoggeIn] = useState(false);

    const navigate = useNavigate();

    const { setToken } = useAuth();

    function handleLogOut(){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userid");
        setToken(null);
        setToggleLoggeIn(!toggleLoggeIn);
        navigate("/");
    }

    return (
        <div className="loggedin-dropdown-wrapper position-relative">
            <i onClick={() => setToggleLoggeIn(!toggleLoggeIn)} class="bi text-white bi-person-circle"></i>

            { toggleLoggeIn && (
                <ul className="header links bg-white position-absolute p-4">
                    <li className="mb-0">
                        <Link to="">avikmajumder17@gmail.com</Link>
                    </li>

                    <li onClick={handleLogOut} className="mb-0">Log Out</li>
                </ul>
            ) }
        </div>
    )
}