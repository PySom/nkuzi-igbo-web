import React from "react";
import pic1 from "../../img/pic1.PNG"
import pic12 from "../../img/pic12.PNG"
import pic2 from "../../img/pic2.PNG"



class Body extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid mx-3">
                    <div className="row">
                        <div className="col-lg-6 mt-4"> 
                            <h1>Amet minim mollit non desert ullacon est sit aliqua</h1>
                            <p>Our mission is to make the learming of Igbo<br/>
                             language fun and accessible to all.</p>
                            <img src= {pic12} alt='Nkuzi description' />
                        </div>
                        <div className="col-lg-6">
                            <img src= {pic1} alt='Nkuzi description' height= {500}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img src= {pic2} alt='Nkuzi description' height= {500}/>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h1>Main Feature</h1>
                            <div>
                                <h5>Learn</h5>
                                <p>Amet minim mollit non desert ullacon est sit aliqua <br/>
                                dolor do amet sint. Velit officia consequat </p>
                            </div>
                            <div>
                                <h5>Practise</h5>
                                <p>Amet minim mollit non desert ullacon est sit aliqua <br/>
                                dolor do amet sint. Velit officia consequat </p>
                            </div>
                            <div>
                                <h5>Repeat</h5>
                                <p>Amet minim mollit non desert ullacon est sit aliqua <br/>
                                dolor do amet sint. Velit officia consequat </p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Body