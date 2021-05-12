import React from 'react';
import Button from 'react-bootstrap/Button';

class DisplayButton extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Button variant='secondary' onClick={this.props.callback}>Like</Button>
        )
    }
}

export default DisplayButton; 