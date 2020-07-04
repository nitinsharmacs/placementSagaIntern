import React from 'react';
import './navigationitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationItems = () => {
	return (
		<ul className='NavigationItems'>
			<li><a href='#'>Question Library</a></li>
			<li><a href='#'>Theory Series <FontAwesomeIcon icon='angle-down' /></a></li>
			<li><a href='#'>Mock Tests</a></li>
			<li><a href='#'>Subscribe</a></li>
		</ul>
		);
}

export default NavigationItems;