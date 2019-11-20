import React from 'react';
import '../BuildControls/BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from "reactstrap";


const BuildControls =(props)=>{

    const controls = [{label:"Salad", type:"salad"},
                      {label:"Bacon", type:"bacon"},
                      {label:"Meat", type:"meat"},
                      {label:"Cheese", type:"cheese"}]   
                                           
                                           const style={
                                            margin:"10px"}

    return(
        <Container>
            <Row>
                <Col><div class="BuildControls">
            <br /> {props.totalPrice.toFixed(2)} <br />
           {controls.map(ctrls=>{
            return(
                <Container><Row><Col><BuildControl key={ctrls.label} label={ctrls.label} add={()=>props.addIngredient(ctrls.type)} remove={()=>props.removeIngredient(ctrls.type)} />
                </Col></Row></Container>
            
            )}
                        )}
            <Button color="primary" style={style} onClick={props.resetIng}>reset</Button>
            <Button color="primary" onClick={props.addOneFromAll}>Add one from all ingredients</Button>
            
             <Button color="success" style={style} onClick={props.AlertVisible}>Order Now!!!</Button>
            </div></Col>
            </Row>
        </Container>
        
    )
}

export default BuildControls;