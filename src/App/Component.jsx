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
import OutreMerContent from '../Creation/outremer/data.json';
import LorealContent from '../Creation/loreal/data.json';
import StopDjihadContent from '../Creation/stopdjihad/data.json';

class App extends Component {
	constructor() {
        super();
		this.state = { current: 0, isTransitionning: false, isMenuOpen: false };
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
        this.state.current < 6 && this.goto(this.state.current + 1);
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
                    isOpen={this.state.isMenuOpen}
                    closeMenu={this.closeMenu.bind(this)}
                    goto={this.goto.bind(this)}
                />
                <Sidebar isBasic={this.state.current === 0 || this.state.current === 6} />
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
                    <Creation
                        {...MonitaureContent}
                        isActive={this.state.current === 1}
                        toggleMenu={this.toggleMenu.bind(this)}
                    />
                    <Creation
                        {...StopDjihadContent}
                        isActive={this.state.current === 2}
                        toggleMenu={this.toggleMenu.bind(this)}
                    />
                    <Creation
                        {...OutreMerContent}
                        isActive={this.state.current === 3}
                        toggleMenu={this.toggleMenu.bind(this)}
                    />
                    <Creation
                        {...LorealContent}
                        isActive={this.state.current === 4}
                        toggleMenu={this.toggleMenu.bind(this)}
                    />
                    <Creation
                        {...EdenParkContent}
                        isActive={this.state.current === 5}
                        toggleMenu={this.toggleMenu.bind(this)}
                    />
                    <Interested isActive={this.state.current === 6} />
                </Swipeable>
			</div>
		);
	}
}

export default App;
