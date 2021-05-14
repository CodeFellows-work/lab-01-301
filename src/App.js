import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import beast from './beast.json';
import FormHorn from './FormHorn';
import ModaBeast from './ModaBeast'

class App extends React.Component {
    
    constructor(){
      super();
      this.state = {
        data: beast,  
        selectedBeasts: {}, 
        searchTitle: '', 
        searchHorns: 0, 

  }
}

// Will search for the beast that matches the user input
setSearch = (search) => {
  this.setState({ searchTitle: search }, this.filterData); 
}
// Will search for the beast with the mathing horns the user inputs from drop down menu 
setSearchHorns = (search) => {
  this.setState({searchHorns: search}, this.filterDataForHorns); 
}
//filter through the beast data and only return the number of horns that user inputs 
filterDataForHorns = () => {
  const filterBeastHorns = (beast) => {
    if(beast.horns === parseInt(this.state.searchHorns)){
      return true;
    }
    return false;
  }
  // this will render the data onto the page 
  if(this.state.searchHorns){
    this.setState({data: this.state.data.filter(filterBeastHorns) });
  }
  // this is a temporary reset button and when '0' is chosen in drop down, all data will return to original state on page
  if(this.state.searchHorns === '0'){
    this.setState({data: beast});
  } 
  // } else {
  //   this.setState({data: beast}); 
  // }
}

// Filtering out data through user input in the search box
filterData = () => {
  const filterBeasts = (beast) => {
    if (beast.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())) {
      return true;
    }
    else if (beast.title.includes(this.state.searchTitle)){
      return true;
    }else{
    return false;
    }
  }
// will render the data onto the page as well as reset back to original state when there are no words 
  if (this.state.searchTitle) {
    this.setState({ data: this.state.data.filter(filterBeasts) });
  } else {
    this.setState({data: beast});
  }
}
    render(){
      return (
        <div id='app' >
        <Header/>
        <FormHorn setSearchHorns={this.setSearchHorns} setSearch={this.setSearch}/>
        <Main data={this.state.data}/> 
        <Footer />
        </div>
      );
    }
  }

export default App; 