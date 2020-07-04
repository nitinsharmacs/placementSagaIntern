import React, { Component } from 'react';
import './bottom.css';
import * as SubBG from '../../assests/img/subbg/subbg';
import TopSvg from '../../assests/img/test.svg';
import BottomSvg from '../../assests/img/test2.svg';

class Bottom extends Component{
	render(){

		let subjects = [
			{name:'array', background:'#53d2dc', img:'_1', corner:1},
			{name:'sorting', background:'#3096e1', img:'_2', corner:3},
			{name:'strings', background:'#ff826e', img:'_3', corner:1},
			{name:'linked list', background:'#ffbe5d', img:'_4', corner:4},
			{name:'stacks & queues', background:'#92a8ff', img:'_5', corner:1},
			{name:'trees', background:'#f0a6ca', img:'_2', corner:2},
			{name:'dynamic programming', background:'#f0a6ca', img:'_2', corner:4},
			{name:'Graphs', background:'#92a8ff', img:'_5', corner:3},
			{name:'searching', background:'#ffbe5d', img:'_4', corner:2},
			{name:'recursion', background:'#ff826e', img:'_3', corner:3},
			{name:'binary search tree', background:'#3096e1', img:'_2', corner:1},
			{name:'mathematical', background:'#53d2dc', img:'_1', corner:3},
			{name:'bit-manipulation', background:'#53d2dc', img:'_1', corner:1},
			{name:'heaps', background:'#3096e1', img:'_2', corner:3},
			{name:'hashing', background:'#ff826e', img:'_3', corner:1},
			{name:'backtracking', background:'#ffbe5d', img:'_4', corner:4},
			{name:'tries', background:'#92a8ff', img:'_5', corner:1},
			{name:'famous algorithms', background:'#f0a6ca', img:'_2', corner:2},
		]
		let lowOpacityImgs = ['_1'];
		let borderR = {
			'1':'0px 50px 50px 50px',
			'2':'50px 0px 50px 50px',
			'3':'50px 50px 0px 50px',
			'4':'50px 50px 50px 0px'
		};
		return(
			<div className='Bottom'>
				<div className='Heading'>
					<h1>Every Topic You need for your <br/><b>Coding Interview</b></h1>
				</div>
				<div className='Subjects'>
					
					{
						subjects.map(sub=><div className='SubjectBox' style={{background:sub.background, borderRadius:borderR[sub.corner]}}>
						<img src={SubBG[sub.img]} style={{opacity:lowOpacityImgs.includes(sub.img)?'0.25':'1', borderRadius:borderR[sub.corner]}} />
						<p>{sub.name}</p>
					</div>)
					}
				</div>
				<div className='BgImages'>
					<div for='top'></div>
					<div for='middle'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 717.77"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M1141.88,18.78c-102.51,44.63-106.12,143.85-200.47,160.94C835.77,198.86,799.46,81.83,678.82,86.55,546,91.74,514.28,236.62,390.82,229.13c-88.43-5.36-99.61-81.36-196.23-100.86C128.21,114.88,59,135.72,0,169.44V693.19c69.32,25.18,152.24,37.08,224.12,5.8,102.51-44.63,106.12-143.85,200.47-160.94,105.64-19.14,142,97.89,262.59,93.17C820,626,851.72,481.15,975.18,488.63c88.43,5.37,99.61,81.37,196.23,100.87,66.38,13.39,135.58-7.45,194.59-41.17V24.58C1296.68-.6,1213.76-12.51,1141.88,18.78Z" style={{fill: 'rgb(233, 240, 251)'}}></path></g></g></svg>
					</div>
					<div for='bottom'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 717.77"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M1141.88,18.78c-102.51,44.63-106.12,143.85-200.47,160.94C835.77,198.86,799.46,81.83,678.82,86.55,546,91.74,514.28,236.62,390.82,229.13c-88.43-5.36-99.61-81.36-196.23-100.86C128.21,114.88,59,135.72,0,169.44V693.19c69.32,25.18,152.24,37.08,224.12,5.8,102.51-44.63,106.12-143.85,200.47-160.94,105.64-19.14,142,97.89,262.59,93.17C820,626,851.72,481.15,975.18,488.63c88.43,5.37,99.61,81.37,196.23,100.87,66.38,13.39,135.58-7.45,194.59-41.17V24.58C1296.68-.6,1213.76-12.51,1141.88,18.78Z" style={{fill: 'rgb(233, 240, 251)'}}></path></g></g></svg>

					</div>
				</div>

			</div>
			);
	}
}

export default Bottom;


/*
<div className='SubjectBox'>
						<img src={SubBG['_5']} />
						<p>Array</p>
					</div>

*/