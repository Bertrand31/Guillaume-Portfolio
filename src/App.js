import React from 'react';

import './App.css';

import Sidebar from './Sidebar/Component';
import Creation from './Creation/Component';
import MonitaureContent from './Creation/Data/Monitaure';

const App = () => (
    <div className="App">
        <Sidebar />
        <div className="c-slider">
            <Creation {...MonitaureContent} />
        </div>
    </div>
);

export default App;
