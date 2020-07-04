import React, {Component} from 'react';
import './Hamburger.css';

const Hamburger = (props) => {
	let clas = ['hamburgerdiv'];
	if(props.showmenu) clas = ['hamburgerdiv', 'hamburgerchange']
	else clas = ['hamburgerdiv'];
	
		return(
				<div className={clas.join(' ')} onClick={props.onClk}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			);
};

export default Hamburger;
