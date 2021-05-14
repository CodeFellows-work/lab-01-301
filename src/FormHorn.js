import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 


class FormHorn extends React.Component{
    constructor(){
        super();
        this.state= {
            hornNumber: 0,
        }
    }
    handleKeyword = (e) => {
        let value = e.target.value;
        this.setState({ searchKeyword: value });
      }
    handleHorns = (e) => {
        let value = e.target.value; 
        this.setState({searchHorns: value })
    }
    handleSubmit = (e) => {
        console.log(this.state.hornNumber) 
    }
    // rendering method
    render (){
        return( 
            <Form> 
                <Form.Label style={{fontFamily: 'Metal Mania', color: 'white'}}></Form.Label>
                <Form.Control onChange={(event) => {
                    this.props.setSearch(event.target.value); 
                    this.handleKeyword(event); }}
                    type='text'
                    placeholder='Enter Horned Beast'/>
                <Form.Control onChange={(e) => {
                    this.props.setSearchHorns(e.target.value);
                    this.handleHorns(e); }} 
                    as='select'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>100</option>
                </Form.Control>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        )
    }
}
export default FormHorn;  