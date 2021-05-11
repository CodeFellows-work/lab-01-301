import React from 'react';

class Main extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h2>Markhor</h2>
                    <img src= "./img/markhor.jpeg" alt="markhor" /> 
                    <p>This is a type of mountain goat</p>
                </div>
                <div>
                    <h2>Saiga</h2>
                    <img src="./img/saiga.jpeg" alt="saiga" /> 
                    <p>This is another type of goat</p>
                </div>
            </div>
        )
    }
}

export default Main; 