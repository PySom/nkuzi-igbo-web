import React from "react";
import "./Nav.css"
import pic4 from "../../img/pic4.PNG"



function Nav() {
    return (
        <div className="nav">
            <div className="container mt-5">
                <nav className="container-fluid navbar navbar-default">
                    <a className="navbar-brand" href="/">
                        <img src= {pic4} alt='Nkuzi description' />
                    </a>
                    <div>
                        <button className="btn btn-danger navbar-btn">Download Now</button>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Nav