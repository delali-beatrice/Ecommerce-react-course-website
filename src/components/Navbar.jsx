import {Link} from "react-router-dom"

function Navbar () {
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
                    <div className="navbar-auth-links">
                        <Link to="/auth" className="btn btn-secondary">
                            Login
                        </Link>
                        <Link to="auth" className="btn btn-primary">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;