import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './ModalComponent';

const App = () => {
  const[showModal,setShowModal]=useState(false);
  const handleopenModal=() =>{
    setShowModal(true);
  }
    const handleCloseModal = () =>{
      setShowModal(false);
    }
  return(
    <div>
      <h2> Main App </h2>
      <button onClick={handleopenModal}></button>
      {showModal &&(ReactDOM.createPortal(
        <ModalComponent onClick={handleCloseModal}></ModalComponent>
      ))}
    </div>
  )
      }

export default App;
   {/* <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
      </Container>

    </Navbar>
    <Register /> */}
