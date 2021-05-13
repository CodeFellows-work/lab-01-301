import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';

class App extends React.Component {
    
    constructor(){
      super();
      this.state = {
        data: data, 
        isClicked: false
    }
    console.log(this.state);
  }
  handleClick = () => {
    console.log('I have Been Clicked')
    this.setState({isClicked: true}, () => console.log(this.state.isClicked))
}

    render(){
      const {data} = this.state; 

      return (
        <div id='app' >
        <Header/>
        <Main handleClick ={this.handleClick} dataToChild={data}/> 
        <Footer />
        </div>
      )
    }
}

export default App; 