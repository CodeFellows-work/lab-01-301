import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Forms extends React.Component {
    cosntructor(props){
        super(props);
        this.state = {
            input: '', 
        
    }
}

handleForm = (event) => {
    event.preventDefault(); 
}

handleInput = (event) => {
    let value = event.target.value;
    this.setState({input: value}); 
}

render() {
    return (
        <Form>
            <Form.Group controlId="formInput">
          <Form.Label>Keyword</Form.Label>
          <Form.Control onChange={this.handleInput} type="text" placeholder="type here" />
          <Form.Text className="text-muted">
            Enter new keyword
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={this.handleForm}>
          Submit
        </Button>
        </Form> 
    )
}
}
export default Forms; 