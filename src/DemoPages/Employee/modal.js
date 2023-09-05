import React,{useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function Model() {
    const [modal,setModal]=useState(false)


    const toggle=()=> {
        setModal(!modal);
    }   
  return (
    <span className="d-inline-block mb-2 me-2">
                <Button outline color="primary" onClick={toggle}>Add new Employee</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Add New Employee</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={toggle}>Cancel</Button>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
  )
}

export default Model