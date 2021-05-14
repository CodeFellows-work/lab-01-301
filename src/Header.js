import React from 'react';

class Header extends React.Component {
   
    constructor() {
        super()
    }

    render() {
        return (
            <div style={{fontFamily: 'Metal Mania', color: 'white'}}>
                <div>
                    <h1 style={{fontSize: '50', display: 'flex', justifyContent: 'center'}}>Horned Beasts</h1>
                </div>
                <div>
                     <audio controls style = {{marginTop: '20px', marginLeft: '80px'}}>
                        <source src ='./mp3/metal.mp3' type='audio/mp3'/> 
                     </audio>
                 </div>
            
            </div>
        )
    }
}

export default Header; 