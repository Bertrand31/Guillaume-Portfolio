import React from 'react';

import './style.css';

import Sidebar from '../Sidebar/Component';
import Creation from '../Creation/Component';
import MonitaureContent from '../Creation/monitaure/data.json';

const App = () => (
    <div>
        <Sidebar />
        <main className="c-slider">
            <Creation {...MonitaureContent} />
        </main>
    </div>
);

export default App;
