import React, { PropTypes } from 'react';

import './style.css';

const Guillaume = ({ isActive, toggleMenu }) => (
    <section className={`c-pane c-basic c-basic--guillaume ${isActive ? 's-is-active' : ''}`}>
        <button onClick={toggleMenu} className="c-hamburger" type="button">
            <span className="c-hamburger__box">
                <span className="c-hamburger__inner"></span>
            </span>
        </button>
        <h2 className="c-basic__title">Guillaume</h2>
        <article className="c-basic__content">
            <p className="c-basic__contentblock">
                <strong>I'm a Digital Art Director looking for a job in January 2017.</strong><br />
                &nbsp;I'm a young french-tech lover who currently work at TBWA\Corporate in Paris. My strength lies in websites and motion design.
            </p>
            <p className="c-basic__contentblock">
                If you're interested in my work, feel free to get in touch at <a href="parra.guillaume@gmail.com">parra.guillaume@gmail.com</a>.<br />I'm not doing freelance jobs at the moment.
            </p>
        </article>
    </section>
);

Guillaume.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default Guillaume;
