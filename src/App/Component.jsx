import React from 'react';

import './style.css';

import Menu from '../Menu/Component';
import Sidebar from '../Sidebar/Component';
import Guillaume from '../Basic/Guillaume';
import Interested from '../Basic/Interested';

import Creation from '../Creation/Component';
import MonitaureContent from '../Creation/monitaure/data.json';
import EdenParkContent from '../Creation/edenpark/data.json';
import LorealContent from '../Creation/loreal/data.json';
import StopDjihadContent from '../Creation/stopdjihad/data.json';

const App = () => (
    <div>
        <Sidebar />
        <main className="c-slider">
            <Guillaume />
            <Creation {...MonitaureContent} />
            <Creation {...StopDjihadContent} />
            <Creation {...LorealContent} />
            <Creation {...EdenParkContent} />
            <Interested />
        </main>
    </div>
);

export default App;
