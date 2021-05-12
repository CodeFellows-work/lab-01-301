import React from 'react'; 
import Card from 'react-bootstrap/Card'
import DisplayButton from './DisplayButton'; 

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    } 


    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render(){
        return (
                <Card style={{fontFamily: 'Metal Mania', width: '40rem', marginTop: '5rem' }}>
                <Card.Img Variant='top' src={this.props.src} alt={this.props.alt} title={this.props.title} /> 
                    <Card.Body style={{background: "url('./img/skulls.jpeg') no-repeat", backgroundSize:'cover',}}>
                    <Card.Title style={{fontSize:'300%',color:'white'}}>{this.props.title}</Card.Title>
                    <Card.Text style={{color:'white'}}>{this.props.description}</Card.Text>
                    <Card.Text style={{color:'white'}}>Horns: {this.props.horns}</Card.Text>
                    <Card.Text style={{fontSize:'200%', color:'white'}}><img src='./img/Heart.png' alt='bloody heart' width='20' /> {this.state.count}</Card.Text>
                    <DisplayButton callback={this.incrementCount} /> 
                    </Card.Body>
                </Card>
           
        )
    } 
}

export default HornedBeast; 