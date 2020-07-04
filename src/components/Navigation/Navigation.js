import React from 'react';
import './navigation.css';
import Logo from '../../assests/img/logo.jpg';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';
import SideDrawer from './SideDrawer/SideDrawer';

const Navigation = (props) => {
	return (
		<div className='NavigationArea'>
		<div className='Navigation'>
			<Hamburger onClk={props.toggleHamburger} showmenu={props.showmenu} />
			<div className='Logo'>
				<div class='LogoName'>
				<p for='top'>Placement</p>
				<p for='bottom'>Saga</p>
				</div>
				<img src={Logo} alt='placementsaga' />
			</div>
			<NavigationItems />
			<SideDrawer onClk={props.toggleHamburger} showmenu={props.showmenu} />
			<div className='LoginBtn'>
				<a>Login
				<span className='flash'></span>
				</a>

			</div>
		</div>
		</div>
		);
};

export default Navigation;