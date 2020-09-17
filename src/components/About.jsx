import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="about" className="about">
                        <div className="container">
                            <div className="section-title">
                                <h2>About</h2>
                             </div>
                            <div className="row">
                                <div className="col-lg-3" data-aos="fade-right">
                                    <img src="assets/img/profile-img.png" className="img-fluid" alt=""></img>
                                </div>
                                <div className="col-lg-9 pt-4 pt-lg-0 content" data-aos="fade-left">
                                    <h3>Typist, Project Management &amp; System Analyst</h3>
                                    <p className="font-italic">
                                         As for below, some data about myself are as follows:
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 11 Juni 1996</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.minding.id</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +62853 7253 2517</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Kisaran, Sumut, INA</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 24</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Diploma</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> aldi@minding.id</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                   
                </main>
            </React.Fragment>
        );
    }
}

export default About;