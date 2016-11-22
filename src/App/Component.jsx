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
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown.bind(this));
	}
	componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

	gotoPrevious() {
        this.state.current > 0 && this.setState({ current: this.state.current - 1 });
	}
	gotoNext() {
        this.state.current < 5 && this.setState({ current: this.state.current + 1 });
	}
    handleKeyDown(e) {
		if (e.keyCode === 40) {
            this.gotoNext();
        } else if (e.keyCode === 38) {
            this.gotoPrevious();
        }
    }

	render() {
		return (
			<div style={styles.sliderContainer}>
                <Menu />
                <Sidebar isBasic={this.state.current === 0 || this.state.current === 5} />
                <Swipeable
                    nodeName="main"
                    trackMouse={true}
                    onSwipedDown={this.gotoPrevious.bind(this)}
                    onMouseDown={this.gotoPrevious.bind(this)}
                    onSwipedUp={this.gotoNext.bind(this)}
                    onMouseUp={this.gotoNext.bind(this)}
                    style={{ transform: `translateY(-${100 * this.state.current}vh)`, ...styles.slider }}
                >
                    <Guillaume isActive={this.state.current === 0} />
                    <Creation {...MonitaureContent} isActive={this.state.current === 1} />
                    <Creation {...StopDjihadContent} isActive={this.state.current === 2} />
                    <Creation {...LorealContent} isActive={this.state.current === 3} />
                    <Creation {...EdenParkContent} isActive={this.state.current === 4} />
                    <Interested isActive={this.state.current === 5} />
                </Swipeable>
			</div>
		);
	}
}

export default App;
