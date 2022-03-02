import React from "react";
import "./Footer.css"
import pic10 from "../../img/pic10.PNG"
import pic11 from "../../img/pic11.PNG"


function Footer() {
    return(
        <div className="footer text-white mt-3">
            <div className="container mt-5">
                <div className="container-fluid">
                    <img src={pic10}/>
                    <p>By submitting this form you agree to our terms and
                        condition and our Privacy Policy <br />
                        use and disclose your personal information including to third parties.
                    </p>
                    <ol>
                        <li>Privacy & Policy</li>
                        <li>Terms & Condition</li>
                    </ol>
                    <img src= {pic11}/>

                </div>

            </div>
        </div>
    )
}

export default Footer