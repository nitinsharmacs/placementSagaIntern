import React, { Component } from 'react';
import './top.css';
import Slider from './Slider/Slider';
import * as Imgs from '../../assests/img/img';

class Top extends Component {

	state = {
		slides:[
			{key:'123a', img:Imgs['_1Card'], introText:'question library', elabText:'250 handpicked questions for coding interviewing in leading companies.'},
			{key:'123b', img:Imgs['_2Card'], introText:'highly qualified mentors', elabText:'highly qualified mentors from leading tech giants.'},
			{key:'123c', img:Imgs['_3Card'], introText:'the perfect playground', elabText:'the perfect playground to practice your coding interview questions.'},
			{key:'123d', img:Imgs['_4Card'], introText:'mock tests', elabText:'final touch with company specific mock tests.'}
		]
	};

	render(){
		return (
			<div className='Top'>
				<div className='Content'>
					<div className='LeftPart'>
						<div className='Info'>
						<h1>Master Your Destiny With <b>PlacementSaga</b></h1>
						<a className='InfoBtn'>View Sample Question
						<span className='flash'></span></a>
						</div>
					</div>
					<div className='RightPart'>
						<Slider slides={this.state.slides} />
					</div>
				</div>
				<div className='Brands'>
					
					{
						Object.keys(Imgs).map((brand,index)=>{
							if(index<6)
								return <div className='BrandImg' style={{animationDelay:`${index}s`}}>
						<img src={Imgs[brand]} />
					</div>
						})
					}

				</div>
			</div>
			);
	}
} 

export default Top;


/*

*/