import React, { PropTypes } from 'react';

import SocialIcons from '../SocialIcons/Component';

import './style.css';

const Sidebar = ({ isBasic }) => {
    const svgFill = {
        transition: 'all .5s ease-in-out',
        fill: isBasic ? '#fff' : '#000',
    };

    return (
        <aside className="c-sidebar">
            <SocialIcons svgFill={svgFill} />
            <h1 className="c-h1">Guillaume Parra - Digital Art Director</h1>
        </aside>
    );
};

Sidebar.propTypes = {
    isBasic: PropTypes.bool.isRequired,
};

export default Sidebar;
