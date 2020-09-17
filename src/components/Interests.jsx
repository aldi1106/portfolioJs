import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Interests extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="interests" className="interests">
                        <div className="container">
                            <div className="section-title">
                                <h2>Interests</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="icofont-book"></i></div>
                                    <h4 className="title"><Link to="">Reading the Book</Link></h4>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="icofont-monitor"></i></div>
                                    <h4 className="title"><Link to="">Watching the Podcast</Link></h4>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="icofont-game"></i></div>
                                    <h4 className="title"><Link to="">Playing PES</Link></h4>
                                 </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="icofont-music"></i></div>
                                    <h4 className="title"><Link to="">Playing Drum Set</Link></h4>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="icofont-flag"></i></div>
                                    <h4 className="title"><Link to="">Learning Foreign Language</Link></h4>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                    <div className="icon"><i className="icofont-tennis"></i></div>
                                    <h4 className="title"><Link to="">Playing Tennis Ball</Link></h4>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Interests;