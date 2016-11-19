import React from 'react';

import './style.css';

import Menu from '../Menu/Component';
import Sidebar from '../Sidebar/Component';
import Guillaume from '../Basic/Guillaume';
import Interested from '../Basic/Interested';

import Creation from '../Creation/Component';
import MonitaureContent from '../Creation/monitaure/data.json';

const App = () => (
    <div>
        <Sidebar />
        <main className="c-slider">
            <Guillaume />
            <Creation {...MonitaureContent} />
            <Interested />
        </main>
    </div>
);

export default App;
