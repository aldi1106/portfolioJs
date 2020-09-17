import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                <section id="education" className="education">
                        <div className="container">
                            <div className="section-title">
                              <h2>Education</h2>
                           </div>
                            <div className="row">
                                <div className="col-lg-12" data-aos="fade-up">
                                    <div className="education-item">
                                        <h4>Senior High School</h4>
                                        <h5>2010 - 2013</h5>
                                        <p><em>SMA N 4 Kisaran</em> (Science)</p>
                                    </div>
                                    <div className="education-item">
                                        <h4>Associate Degree</h4>
                                        <h5>2013 - 2016</h5>
                                        <p><em>AMIK ROYAL KISARAN (Informatics Management)</em></p>
                                    </div>
                                    <div className="education-item">
                                        <h4>Undergraduate</h4>
                                        <h5>2016 - Present</h5>
                                        <p><em>PANCABUDI MEDAN (Computer Systems & Science)</em></p>
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

export default Education;