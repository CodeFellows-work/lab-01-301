import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
      super();
    }
    

    render(){
      return (
        <div id='app' >
        <Header/>
        <Main /> 
        <Footer />
        </div>
      )
    }
}

export default App; 