import React, { PropTypes } from 'react';

import dribble from './pictos/dribble.svg';
import twitter from './pictos/twitter.svg';
import linkedin from './pictos/linkedin.svg';

import './style.css';

const Menu = ({ creationsData, isOpen, closeMenu, goto }) => (
    <nav className={`c-menu ${isOpen ? 's-is-open' : ''}`}>
        <section className="c-menu__works">
            <h2 className="c-menu__title">Works</h2>
            <ul className="c-works">
                {creationsData.map((data, i) =>
                    <li className="c-works__el" key={i}>
                        <a className="c-works__link" href="#_" onClick={(e) => { e.preventDefault(); goto(i + 1); }}>
                            {data.title}
                        </a>
                    </li>
                )}
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

Menu.propTypes = {
    creationsData: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
    goto: PropTypes.func.isRequired,
};

export default Menu;
