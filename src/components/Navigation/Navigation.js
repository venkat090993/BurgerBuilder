import React from 'react';
import "../../components/Navigation/Navigation.css";
import BurgerLogo from "../BurgerLogo/Burgerlogo";
import {NavLink} from 'react-router-dom'

const Navigation =(props)=>{


const style = {zIndex:"110"}

    return(
        <div class="toolBar" style={style}>
            <div onClick={props.sideDrawer}>Menu</div>
            <BurgerLogo height="80%"/>
            <NavLink to="/orders">Orders</NavLink>
        </div>
        
    )
}

export default Navigation;
