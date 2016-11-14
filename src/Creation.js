import React, { PropTypes } from 'react';

const Creation = ({ title, tags, content }) => (
    <div className="c-pane c-creation">
        <h1>{title}</h1>
        <ul className="c-tags">
            {tags.map((tag, i) => (<li key={i} className="c-tags__item">{tag}</li>))}
        </ul>
        <p className="c-content">
            {content}
        </p>
    </div>
);

Creation.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    content:  PropTypes.string.isRequired,
};

export default Creation;
