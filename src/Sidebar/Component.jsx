import React from 'react';

import dribble from './pictos/dribble.svg';
import twitter from './pictos/twitter.svg';
import linkedin from './pictos/linkedin.svg';

import './style.css';

const Sidebar = () => (
    <aside className="c-sidebar">
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
        <h1 className="c-h1">Guillaume Parra - Digital Art Director</h1>
    </aside>
);

export default Sidebar;
