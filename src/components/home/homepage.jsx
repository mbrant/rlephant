import React from 'react'

const Home = props => {
    return (
        <header id="home-section">
            <div className="dark-overlay">
                <div className="home-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="display-4">Build your dream site
                                </h1>
                            </div>
                            <div className="col-lg-4">
                                <div className="card bg-primary text-center card-form">
                                    <div className="card-body">
                                        <h3>Request a Quote</h3>
                                        <p>Fill out these fields</p>
                                        <form id="quoteForm">
                                            <div className="form-group">
                                                <input onChange={props.handleName} type="text"
                                                placeholder="Name" className="form-control-lg"/>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={props.handleEmail} type="email"
                                                placeholder="Email" className="form-control-lg"/>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={props.handlePhone} type="phone"
                                                placeholder="Phone" className="form-control-lg"/>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={props.handleCompany} type="text"
                                                placeholder="Company" className="form-control-lg"/>
                                            </div>
                                            <input onClick={props.onSubmit} type="text" className="btn btn-outline-light btn-block"
                                            value="Contact"
                                            readOnly
                                            />
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

module.exports = Home