import React, { PropTypes } from 'react';

import SocialIcons from '../SocialIcons/Component';

import './style.css';

const Menu = ({ creationsData, isOpen, closeMenu, goto }) => (
    <nav className={`c-menu ${isOpen ? 's-is-open' : ''}`}>
        <section className="c-menublock c-menublock--works">
            <h2 className="c-menu__title">Works</h2>
            <ul className="c-works">
                {creationsData.map((data, i) =>
                    <li
                        className="c-works__el"
                        style={{ color: `#${data.primary_color}` }}
                        key={i}
                    >
                        <a
                            className="c-works__link"
                            onClick={(e) => { e.preventDefault(); goto(i + 1); }}
                            href="#_"
                        >
                            <span className="c-works__title">{data.title}</span>
                            <span className="c-works__tags">
                                {data.tags.map((tag, i) =>
                                    <span className="c-works__tag" key={i}>{tag}</span>
                                )}
                            </span>
                        </a>
                    </li>
                )}
            </ul>
        </section>
        <section className="c-menublock c-menublock--contact">
            <h2 className="c-menu__title">Contact</h2>
            <a href="mailto:parra.guillaume@gmail.com" className="c-email-link">
                parra.guillaume@gmail.com
            </a>
        </section>
        <section className="c-menublock c-menublock--social">
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
