import React from 'react';
import Auxillary from "../../HOC/Auxillary";
import BurgerLogo from '../BurgerLogo/Burgerlogo';
import "../SideDrawer/SideDrawerElements.css";
import "../BurgerLogo/Burgerlogo.css"
const SideDrawerElements =(props) =>{

    return(
        <Auxillary onClick={props.click}>
            <BurgerLogo height="80px"/>
            <br />
            <br />
            <div>Your orders</div>
            <br />
            <div>Payment details</div>
            <br />
            <div>Contact Us!!</div>
        </Auxillary>
    )
}

export default SideDrawerElements;