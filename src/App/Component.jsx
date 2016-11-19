import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

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

const styles = {
    sliderContainer: {
        height: '100vh',
        overflow: 'hidden',
    },
    slider: {
        transition: 'all .5s ease-in-out',
    },
};

class App extends Component {
	constructor() {
        super();
		this.state = { current: 0 };
    }
	onSwipedDown() {
        this.setState({ current: this.state.current - 1 });
	}
	onSwipedUp() {
        this.setState({ current: this.state.current + 1 });
	}

	render() {
		return (
			<div style={styles.sliderContainer}>
                <Sidebar isBasic={this.state.current === 0 || this.state.current === 5} />
                <Swipeable
                    nodeName="main"
                    trackMouse={true}
                    onSwipedDown={this.onSwipedDown.bind(this)}
                    onSwipedUp={this.onSwipedUp.bind(this)}
                    onMouseDown={this.onSwipedDown.bind(this)}
                    onMouseUp={this.onSwipedUp.bind(this)}
                    style={{ transform: `translateY(-${100 * this.state.current}vh)`, ...styles.slider }}
                >
                    <Guillaume />
                    <Creation {...MonitaureContent} />
                    <Creation {...StopDjihadContent} />
                    <Creation {...LorealContent} />
                    <Creation {...EdenParkContent} />
                    <Interested />
                </Swipeable>
			</div>
		);
	}
}

export default App;
