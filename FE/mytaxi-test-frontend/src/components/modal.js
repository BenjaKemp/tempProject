
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class MyModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >

          <h1 ref={subtitle => this.subtitle = subtitle}>Welcome to my taxi locator</h1>
          <p style={{fontSize: '20px'}}>
          To locate your taxi, use the filters at the top to select the necessary 'active' status <br/>
          for the cars in the myTaxi list. <br/>
          Next,  filter the acceptability of cars2go. You can choose any combination of acceptable and  <br/>
          unacceptable interiors and exteriors <br/>
          Check the list of suitable vehicles on the left and select the car you want<br/>
          click the list item to locate your chosen car on the map <br/>
          wherabouts by clicking on the details card</p>
        </Modal>
    );
  }
}

export default MyModal
