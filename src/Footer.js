import React from 'react';

class Footer extends React.Component {
    
    constructor(props){
        super(props); 
    }   

    render()  {
        return (
            <div id='footer' style={{fontFamily: 'Metal Mania', display:'flex', justifyContent:'center', marginTop: '10rem'}}>
                <h5>Sunny Lee · Code Fellows 301</h5>
                
            </div>
        )
    }
}

export default Footer;