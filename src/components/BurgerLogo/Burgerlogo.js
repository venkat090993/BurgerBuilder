import React from 'react';
import BurgerLog from '../../../src/Assets/images/burger-logo.png';
import "./Burgerlogo.css"

const BurgerLogo =(props)=>{

     return(
<img class="logo" src={BurgerLog} style={{height: props.height, zIndex:props.zIndex, marginLeft:props.marginLeft, marginTop: props.marginTop}} />    )
}

export default BurgerLogo;