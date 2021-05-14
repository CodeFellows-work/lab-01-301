import React from 'react'; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; 
import Image from 'react-bootstrap/Image'


class ModalBeast extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            show: false, 
        }
    }
    handleModal() {
        this.setState({show: !this.state.show})
    }
        render() {
          return (
            <div>
            <Button style={{marginTop: '10px'}} variant="secondary" onClick={() => {this.handleModal()}}> Open Modal </Button>
              <Modal show={this.state.show} onHide={()=> this.handleModal()}>
                <Modal.Header>
                <Modal.Title>{this.props.title}</Modal.Title>
               
                </Modal.Header>
          
                <Modal.Body >
                  
                  <Image style={{height: '20rem', width: '29rem'}} src={this.props.src} rounded />
                  
                  {this.props.description}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleModal()}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    }
}
export default ModalBeast; 