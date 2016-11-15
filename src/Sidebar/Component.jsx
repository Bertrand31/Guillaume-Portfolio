import React from 'react';

const Sidebar = () => (
    <div className="c-sidebar">
        <ul className="c-icons">
            <li className="c-icons__el">
                <a className="c-icon c-icon--dribble" href="https://dribbble.com/guillaumeparra/">
                    Dribble
                </a>
            </li>
            <li className="c-icons__el">
                <a className="c-icon c-icon--twitter" href="https://twitter.com/guillaume_parra">
                    Twitter
                </a>
            </li>
            <li className="c-icons__el">
                <a className="c-icon c-icon--linkedin" href="https://www.linkedin.com/in/whyyouwillhireme">
                    Linkedin
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
