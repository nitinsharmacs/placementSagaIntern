import React, {Component} from 'react';
import './slider.css';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Img from '../../../assests/img/2.svg';


class Slider extends Component {
	state = {
		activeSlide:this.props.slides[0]
	}
	changeSlides = () => {
		let i = 1;
		setInterval(()=>{
			this.setState({activeSlide:this.props.slides[i]});
			i++;
			if(i === this.props.slides.length)
				i = 0;
			
		}, 3000)
		
	}
	componentDidMount(){
		this.changeSlides();
	}
	changeSlide = (index) => {
		this.setState({activeSlide:this.props.slides[index]});
	};
	render(){
		
		return(
			<div className='Slider'>
				<div className='Slides'>
					<div className='SlideWhitePart'>
						<div className='TopCorner' />
						
							<TransitionGroup className='SlideWhite'>
								<CSSTransition key={this.state.activeSlide.key} timeout={300} classNames='item' exit={false} >
									<div className='item'>
									<img src={this.state.activeSlide.img} />
									<span>{this.state.activeSlide.introText}</span>
									</div>
								</CSSTransition>
							</TransitionGroup>
						
					</div>
					<div className='SlideBluePart'>
						<TransitionGroup className='SlideBlue' >
							<CSSTransition key={this.state.activeSlide.key} timeout={300} classNames='item' exit={false} >
							<span>{this.state.activeSlide.elabText}</span>
							</CSSTransition>
						</TransitionGroup>
						<div className='BottomCorner' />
					</div>
				</div>
				<div className='SlideBtns'>
					
					{
						this.props.slides.map((slide, index)=><div className={['SlideBtn ', this.state.activeSlide.key===slide.key?'Active':''].join(' ')} onClick={()=>this.changeSlide(index)} >

					</div>)
					}
				</div>
			</div>
		);
	}
	
};

export default Slider;