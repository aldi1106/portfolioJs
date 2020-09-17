import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <React.Fragment>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="assets/img/profile-img.png" alt="" className="img-fluid rounded-circle"></img>
                        <h1 className="text-light"><Link to="/">Aldi Kesuma</Link></h1>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li><Link to="#about"><i className="bx bx-user"></i> <span>About</span></Link></li>
                            <li><Link to="#experience"><i className="bx bx-square"></i> <span>Experience</span></Link></li>
                            <li><Link to="#education"><i className="bx bx-shield"></i> Education</Link></li>
                            <li><Link to="#skills"><i className="bx bx-list-check"></i> Skills</Link></li>
                            <li><Link to="#interests"><i className="bx bx-book-content"></i> Interests</Link></li>
                            <li><Link to="#awards"><i className="bx bx-key"></i> <span>Awards</span></Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                      Copyright &copy; 2020 
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}

export default Sidebar;