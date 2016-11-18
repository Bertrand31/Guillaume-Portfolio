import React, { PropTypes } from 'react';

import './style.css';

const Creation = ({ slug, title, tags, content, url }) => {

    const desktop = require(`./${slug}/desktop.png`);
    const mobile = require(`./${slug}/mobile.png`);

    return (
        <section className={`c-pane c-creation c-creation--${slug}`}>
            <article className="c-pane__left">
                <ul className="c-tags">
                    {tags.map((tag, i) => (<li key={i} className="c-tags__item">{tag}</li>))}
                </ul>
                <h2 className="c-h2">{title}</h2>
                <p className="c-content">{content}</p>
                <a href={url} className="c-button">See the project</a>
            </article>
            <aside className="c-pane__right">
                <img src={desktop} alt={`${title} on desktop`} className="illus--desktop" />
                <img src={mobile} alt={`${title} on mobile`} className="illus--mobile" />
            </aside>
        </section>
    );
};

Creation.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    content:  PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Creation;
