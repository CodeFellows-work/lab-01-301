import React from 'react';

class Footer extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props); 
    }   

    render()  {
        return (
            <div id='footer' style={{fontFamily: 'Metal Mania',color: 'white', display:'flex', justifyContent:'center', marginTop: '10rem'}}>
                <h5>Sunny Lee · Code Fellows 301</h5>
                <audio controls  style={{marginLeft: '50px', width: '200px'}}>
                    <source src="./mp3/afterBurial.mp3" type="audio/mp3"/>
                </audio> 
            </div>
        )
    }
}

export default Footer;