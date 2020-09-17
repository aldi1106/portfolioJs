import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="experience" className="experience section-bg">
                        <div className="container">
                            <div className="section-title">
                              <h2>Experience</h2>
                            </div>
                
                            <div className="row">
                           
                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="experience-item">
                                        <h4>Administrator</h4>
                                        <h5>2014 - 2016</h5>
                                        <p><em>Notaris & PPAT Timbanglaut, SH., M.Kn Kisaran </em></p>
                                    </div>
                                </div>
                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="experience-item">
                                        <h4>Owner & Management</h4>
                                        <h5>2015 - Present</h5>
                                        <p><em>EIF2C Study Course Kisaran</em></p>
                                    </div>
                                </div>
                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="experience-item">
                                        <h4>Operator & Administration</h4>
                                        <h5>2017 - Present</h5>
                                        <p><em>PT Indonesia Asahan Aluminium (Persero)</em></p>
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

export default Experience;