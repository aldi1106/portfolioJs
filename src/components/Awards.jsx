import React, { Component } from 'react';

class Awards extends Component {
    render() {
        return (
            <React.Fragment>
              <main id="main">
                 <section id="awards" className="awards section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Awards</h2>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                    <div className="count-box">
                                        <i className="icofont-simple-smile"></i>
                                        <span data-toggle="counter-up">1</span>
                                        <p><strong>Typewriter Certificate</strong> </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="count-box">
                                        <i className="icofont-document-folder"></i>
                                        <span data-toggle="counter-up">450</span>
                                        <p><strong>Projects</strong> in 5 years</p>
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

export default Awards;