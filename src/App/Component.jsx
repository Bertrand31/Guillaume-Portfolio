import React, { Component } from 'react';
import Swipeable from 'react-swipeable';

import './style.css';

import Menu from '../Menu/Component';
import Sidebar from '../Sidebar/Component';
import Guillaume from '../Basic/Guillaume';
import Interested from '../Basic/Interested';

import Creation from '../Creation/Component';

import Monitaure from '../Creation/monitaure/data.json';
import EdenPark from '../Creation/edenpark/data.json';
import OutreMer from '../Creation/outremer/data.json';
import Loreal from '../Creation/loreal/data.json';
import StopDjihad from '../Creation/stopdjihad/data.json';

const creationsData = [ Monitaure, StopDjihad, Loreal, EdenPark, OutreMer];

class App extends Component {
	constructor() {
        super();
		this.state = { current: 0, isTransitionning: false, isMenuOpen: false };
        // +2 because of the first and last 'basic' slides
        this.numberOfSlides = creationsData.length + 2;
    }
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown.bind(this));
	}
	componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

    goto(destination) {
        this.executeTransition();
        this.state.isMenuOpen && this.closeMenu();
        this.setState({ ...this.state, current: destination });
    }
	gotoPrevious() {
        this.state.current > 0 && this.goto(this.state.current - 1);
	}
	gotoNext() {
        this.state.current < this.numberOfSlides - 1 && this.goto(this.state.current + 1);
	}
    handleKeyDown(e) {
		if (e.keyCode === 40) {
            this.gotoNext();
        } else if (e.keyCode === 38) {
            this.gotoPrevious();
        }
    }
    executeTransition() {
        this.setState({ ...this.state, isTransitionning: true });
        setTimeout(() => {
            this.setState({ ...this.state, isTransitionning: false });
        }, 800);
    }
    toggleMenu() {
        this.setState({ ...this.state, isMenuOpen: !this.state.isMenuOpen });
    }
    closeMenu() {
        this.setState({ ...this.state, isMenuOpen: false });
    }

	render() {
		return (
			<div className="c-slider-container">
                <Menu
                    creationsData={creationsData}
                    isOpen={this.state.isMenuOpen}
                    closeMenu={this.closeMenu.bind(this)}
                    goto={this.goto.bind(this)}
                />
                <Sidebar isBasic={this.state.current === 0 || this.state.current === this.numberOfSlides - 1} />
                <Swipeable
                    nodeName="main"
                    trackMouse={true}
                    onSwipedDown={this.gotoPrevious.bind(this)}
                    onMouseDown={this.gotoPrevious.bind(this)}
                    onSwipedUp={this.gotoNext.bind(this)}
                    onMouseUp={this.gotoNext.bind(this)}
                    className={this.state.isTransitionning ? 's-is-transitionning' : 's-is-done-transitionning'}
                    onClick={() => this.state.isMenuOpen && this.closeMenu()}
                >
                    <Guillaume isActive={this.state.current === 0} />
                    {creationsData.map((data, i) =>
                        <Creation {...data} isActive={this.state.current === i + 1} toggleMenu={this.toggleMenu.bind(this)} key={i} />
                    )}
                    <Interested isActive={this.state.current === this.numberOfSlides - 1} />
                </Swipeable>
			</div>
		);
	}
}

export default App;
