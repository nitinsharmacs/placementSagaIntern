import React from 'react';
import './backdrop.css';
const backdrop = (props) => {
	if(props.showmenu){
		document.getElementsByTagName('body')[0].style.overflowY = "hidden";
	} else {
		document.getElementsByTagName('body')[0].style.overflowY = "";
	}
	
	return props.showmenu ? <div className={'backdrop'} onClick={props.onClk}></div> : null;
	
	};

export default backdrop;