import React, { Component } from 'react';
import { Link } from 'react-scroll';

import dribble from './pictos/dribble.svg';
import twitter from './pictos/twitter.svg';
import linkedin from './pictos/linkedin.svg';

import './style.css';

class Menu extends Component {
    constructor() {
        this.setState({ open: false });
    }
    render() {
        return (
            <nav className={`c-menu ${this.state.open ? 's-is-open' : ''}`}>
                <section className="c-menu__works">
                    <h2 className="c-menu__title">Works</h2>
                    <ul className="c-works">
                        <li className="c-works__el">
                            <Link className="c-works__link" to="c-pane--monitaure" smooth={true}>
                                Monitaure
                                <span className="c-keywords">UI UX MOTION WEBDESIGN</span>
                            </Link>
                        </li>
                        <li className="c-works__el">
                            <Link className="c-works__link" to="c-pane--djihad" smooth={true}>
                                Stop Djihadisme
                                <span className="c-keywords">UI UX MOTION WEBDESIGN</span>
                            </Link>
                        </li>
                        <li className="c-works__el">
                            <Link className="c-works__link" to="c-pane--loreal" smooth={true}>
                                l'Oréal
                                <span className="c-keywords">UI UX MOTION WEBDESIGN</span>
                            </Link>
                        </li>
                        <li className="c-works__el">
                            <Link className="c-works__link" to="c-pane--edenpark" smooth={true}>
                                Eden Park
                                <span className="c-keywords">UI UX MOTION WEBDESIGN</span>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="c-menu__contact">
                    <h2 className="c-menu__title">Contact</h2>
                    <a href="mailto:parra.guillaume@gmail.com">
                        parra.guillaume@gmail.com
                    </a>
                </section>
                <section className="c-menu__social">
                    <ul className="c-icons">
                        <li className="c-icons__el">
                            <a className="c-icon c-icon--dribble" href="https://dribbble.com/guillaumeparra/">
                                <img src={dribble} alt="Twitter profile" />
                            </a>
                        </li>
                        <li className="c-icons__el">
                            <a className="c-icon c-icon--twitter" href="https://twitter.com/guillaume_parra">
                                <img src={twitter} alt="Twitter profile" />
                            </a>
                        </li>
                        <li className="c-icons__el">
                            <a className="c-icon c-icon--linkedin" href="https://www.linkedin.com/in/whyyouwillhireme">
                                <img src={linkedin} alt="Linkedin profile" />
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        );
    }
}

export default Sidebar;
