import React, { PropTypes } from 'react';

const Interested = ({ isActive, toggleMenu }) => (
    <section className={`c-pane c-basic c-basic--interested ${isActive ? 's-is-active' : ''}`}>
        <button onClick={toggleMenu} className="c-hamburger" type="button">
            <span className="c-hamburger__box">
                <span className="c-hamburger__inner"></span>
            </span>
        </button>
        <h2 className="c-basic__title">Interested?</h2>
        <article className="c-basic__content">
            <a href="mailto:parra.guillaume@gmail.com" className="c-button c-button--white">Send me an email</a>
            <a href="/CVGuillaumeParra2017.pdf" className="c-button">Look at my résumé</a>
            <a href="https://dribbble.com/guillaumeparra" className="c-button">My Dribble</a>
        </article>
    </section>
);

Interested.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default Interested;
