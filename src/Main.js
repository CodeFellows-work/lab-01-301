import React from 'react';
import HornedBeast from './HornedBeast'; 



class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.dataToChild,
        }
        // this.props.handleClick();
      }
  
 
    render(){
        return (
            <div>
               {this.state.data.map( item => {
                   return <HornedBeast
                   title={this.props.title}
                   src={item.image_url}
                   alt={item.keyword}
                   description={item.description}
                   horns={item.horns} />})}
                <button onClick={() => this.props.handleClick(this.props.isClicked)} style={{backgroundColor: 'red', paddingBottom:'10px', marginLeft: '300px', width:'50px', height:'35px'}} ></button>
   
            </div>
        )
    }
}

export default Main; 