import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div>
                <form className="container">
                    <div className="mx-5">
                        <div className="container-fluid row">
                            <div className="col-sm-6">
                                <p>Your name*</p>
                                <input className="form-control"></input>
                            </div>
                            <div className="col-sm-6">
                                <p>Contact name*</p>
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="container-fluid row">
                            <div className="col-sm-6">
                                <p>Your name*</p>
                                <input className="form-control"></input>
                            </div>
                            <div className="col-sm-6">
                                <p>Contact name*</p>
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="container-fluid row">
                            <div>
                                <label for="comment">Your Message*</label>
                                <textarea class="form-control" rows="3" id="comment"></textarea>
                            </div>
                            <div>
                                <p>By submitting this form you agree to our terms and
                                    condition and our Privacy Policy which explains how  we may collect,
                                    use and disclose your personal information including to third parties.
                                </p>
                                <button className="btn-lg btn-danger navbar-btn">Contact sales</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}
export default Form