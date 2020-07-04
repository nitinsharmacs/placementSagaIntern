import React from 'react';
import './sidedrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationItems from '../NavigationItems/NavigationItems';


const sidedrawer = (props) => {

	let sideDrawerClasses = ['SideDrawer', 'Close'];
	if(props.showmenu){
		sideDrawerClasses = ['SideDrawer', 'Open'];
	}

	return (
			<Aux>
				<Backdrop showmenu={props.showmenu} onClk={props.onClk} />
				<div className={sideDrawerClasses.join(' ')} onClick={props.close}>
					<ul className='linklist'>
						<li><a href='#'>Question Library</a></li>
						<li><a href='#'>Theory Series <FontAwesomeIcon icon='angle-down' /></a></li>
						<li><a href='#'>Mock Tests</a></li>
						<li><a href='#'>Subscribe</a></li>
					</ul>
				</div>
			</Aux>
		)
};

export default sidedrawer;