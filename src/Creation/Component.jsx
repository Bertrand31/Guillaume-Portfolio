import React, { PropTypes } from 'react';

import './style.css';

const Creation = ({ slug, number, title, tags, content, url, primary_color, secondary_color, isActive, toggleMenu }) => {

    const desktop = require(`./${slug}/desktop.png`);
    const mobile = require(`./${slug}/mobile.png`);

    return (
        <section
            className={`c-pane c-creation ${isActive ? 's-is-active' : ''}`}
            style={{ backgroundColor: `#${primary_color}` }}
        >
            <div className="c-creation__wrapper">
                <article className="c-pane__left">
                    <ul className="c-tags">
                        {tags.map((tag, i) => (<li key={i} className="c-tags__el">{tag}</li>))}
                    </ul>
                    <h2 className="c-h2" style={{ color: `#${primary_color}` }}>{title}</h2>
                    <p className="c-content" dangerouslySetInnerHTML={{__html: content}} />
                    <a
                        href={url}
                        className="c-button"
                        style={{ color: `#${secondary_color}`, borderColor: `#${secondary_color}` }}
                    >
                        See the project
                    </a>
                </article>
                <aside className="c-pane__right">
                    <button onClick={toggleMenu} className="c-hamburger" type="button">
                        <span className="c-hamburger__box">
                            <span className="c-hamburger__inner"></span>
                        </span>
                    </button>
                    <div className="illus-wrapper">
                        <img src={desktop} alt={`${title} on desktop`} className="illus illus--desktop" />
                        <img src={mobile} alt={`${title} on mobile`} className="illus illus--mobile" />
                    </div>
                    <div className="c-creation-number">{number}</div>
                </aside>
            </div>
        </section>
    );
};

Creation.propTypes = {
    slug: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    content:  PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    primary_color: PropTypes.string.isRequired,
    secondary_color: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default Creation;
