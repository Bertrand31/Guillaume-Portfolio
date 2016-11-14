import React from 'react';

import './App.css';

import Creation from './Creation';

import MonitaureContent from './Content/Monitaure';

const App = () => (
    <div className="App">
        <div className="c-slider">
            <Creation {...MonitaureContent} />
        </div>
    </div>
);

export default App;
