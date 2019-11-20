import React from 'react';
import "../BuildControl/BuildControl.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";



const BuildControl =(props)=>{
    
    return(
        <div class="controlArea">
        <Button color="danger" onClick = {props.remove}>LESS</Button>
        <div class="label">{props.label}</div>
        <Button color="success" class="controlButtons" onClick={props.add}>MORE</Button>
        </div>
     )
}

export default BuildControl;