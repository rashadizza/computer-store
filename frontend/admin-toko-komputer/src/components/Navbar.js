import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{

    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location = "/login"
    }

    render(){
        return(
            <div class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand">
                        Moklet Computer Store
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/product" class="nav-link">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/customer" class="nav-link">Customers</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/transaction" class="nav-link">Transactions</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin" class="nav-link">Administrator</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" onClick={() => this.Logout()}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;