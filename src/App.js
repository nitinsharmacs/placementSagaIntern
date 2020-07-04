import React, { Component } from 'react';
import './App.css';
import './assests/icons';
import Layout from './hoc/Layout/Layout';
import Top from './components/Top/Top';
import Bottom from './components/Bottom/Bottom';

class App extends Component{
  render(){
    return (
  	<Layout>
  		<Top />
  		<Bottom />
  	</Layout>  
  );
  }
}
export default App;
