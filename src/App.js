import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import beast from './beast.json';
import FormHorn from './FormHorn';

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
// selectBeast = (beast) => {
//   this.setState({ selectedBeast: beast });
// }

setSearch = (search) => {
  this.setState({ searchTitle: search }, this.filterData); 
}
setSearchHorns = (search) => {
  this.setState({searchHorns: search}, this.filterDataForHorns); 
}
filterDataForHorns = () => {
  const filterBeastHorns = (beast) => {
    if(beast.horns === parseInt(this.state.searchHorns)){
      return true;
    }
    return false;
  }
  if(this.state.searchHorns){
    this.setState({data: this.state.data.filter(filterBeastHorns) });
  }
  if(this.state.searchHorns === '0'){
    this.setState({data: beast});
  } 
  // } else {
  //   this.setState({data: beast}); 
  // }
}

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
        <Main data={this.state.data} selectBeast={this.selectBeast}/> 
        <Footer />
        </div>
      );
    }
  }

export default App; 