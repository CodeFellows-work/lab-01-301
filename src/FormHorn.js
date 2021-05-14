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
    // this is a handler for the words that are input 
    handleKeyword = (e) => {
        let value = e.target.value;
        this.setState({ searchKeyword: value });
      }
    // this is the handler for the horns that are chosen through drop down 
    handleHorns = (e) => {
        let value = e.target.value; 
        this.setState({searchHorns: value })
    }
    // handleSubmit = (e) => {
    //     console.log(this.state.hornNumber) 
    // }
    // this will render the Forms that are towards the top of the page 
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
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>100</option>
                </Form.Control>
                
            </Form>
        )
    }
}
export default FormHorn;  