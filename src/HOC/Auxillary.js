
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col} from 'reactstrap';
import React from 'react';

const Auxillary =(props)=>{
    
    return(
        <Container><Row><Col>{props.children}</Col></Row></Container>);
    }


export default Auxillary;