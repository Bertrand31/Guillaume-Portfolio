import React, { PropTypes } from 'react';

const Creation = ({ title, tags, content, url, videos }) => (
    <div className="c-pane c-creation">
        <div className="c-pane__left">
            <h1>{title}</h1>
            <ul className="c-tags">
                {tags.map((tag, i) => (<li key={i} className="c-tags__item">{tag}</li>))}
            </ul>
            <p className="c-content">
                {content}
            </p>
            <a href={url} className="c-button">See the project</a>
        </div>
        <div className="c-pane__right">
            <video>
                {videos.map((video, i) => (<source key={i} src={video.src} type={video.type} />))}
            </video>
        </div>
    </div>
);

Creation.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    content:  PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    videos: PropTypes.array.isRequired,
};

export default Creation;
