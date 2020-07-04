import React, {Component} from 'react';
import './layout.css';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component{

	state = {
		showmenu:false
	};
	toggleHamburger = () => {
		this.setState({showmenu:!this.state.showmenu});
	};
	render(){
		return (
			<div className='Layout'>
				<Navigation showmenu={this.state.showmenu} toggleHamburger={this.toggleHamburger} />
				{this.props.children}
			</div>
			);
	}
}

export default Layout;