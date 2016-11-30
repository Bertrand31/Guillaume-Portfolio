import React, { PropTypes } from 'react';

import SocialIcons from '../SocialIcons/Component';

import './style.css';

const Menu = ({ creationsData, isOpen, closeMenu, goto }) => (
    <nav className={`c-menu ${isOpen ? 's-is-open' : ''}`}>
        <section className="c-menu__works">
            <h2 className="c-menu__title">Works</h2>
            <ul className="c-works">
                {creationsData.map((data, i) =>
                    <li className="c-works__el" key={i}>
                        <a
                            className="c-works__link"
                            href="#_"
                            onClick={(e) => { e.preventDefault(); goto(i + 1); }}
                            style={{ color: `#${data.primary_color}` }}
                        >
                            {data.title}
                            <span className="c-works__tags">
                                {data.tags.join(' ')}
                            </span>
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
            <SocialIcons />
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
