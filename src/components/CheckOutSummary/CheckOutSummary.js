import React from 'react';
import Burger from "../Burger/Burger";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'reactstrap';

const CheckOutSummary =(props)=>{
    



    return(
        <div style={{marginLeft:"200px"}}>
            <h1>Hope you like it!!!</h1>
            <div style={{width:"300px", height:"200px"}}>
                <Burger ingredient={props.ingredient}/>
                <div style={{width:"200px", height:"50px", marginLeft:70}}>
                <Button color="danger" onClick={props.prevclick}>Previous</Button> <Button color="success"  onClick={props.click}>Next</Button>
                </div>
            </div>
            
        </div>
    )

}

export default CheckOutSummary;    