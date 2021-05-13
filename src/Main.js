import React from 'react';
import HornedBeast from './HornedBeast'; 



class Main extends React.Component{
    constructor(props) {
        super(props);
       
      }

    render(){
        return (
            <div>
               {this.props.data.map( item => {
                   return <HornedBeast
                   title={item.title}
                   src={item.image_url}
                   alt={item.keyword}
                   description={item.description}
                   horns={item.horns} />})}

            </div>
        )
    }
}

export default Main; 