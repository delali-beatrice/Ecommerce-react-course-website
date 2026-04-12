import {Link} from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Navbar () {
    const {user, logOut} = useAuth();
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    ShopHub
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                    <Link to="/Checkout" className="navbar-link">
                        Cart
                    </Link>
                </div>
                <div className="navbar-auth">
                    {!user ? (
                        <div className="navbar-auth-links">
                            <Link to="/auth" className="btn btn-secondary">
                                Login
                            </Link>
                            <Link to="/auth" className="btn btn-primary">
                                Signup
                            </Link>
                        </div>
                        ) : (
                            <div className="navbar-user">
                                <span className="navbar-greeting">Hello, {user.email}</span>
                                <button className="btn btn-secondary" onClick={logOut}>
                                    LogOut
                                </button>
                            </div> 
                        )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;