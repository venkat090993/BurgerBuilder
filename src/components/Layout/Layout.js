import React, {Component} from 'react';
import Auxillary from "../../HOC/Auxillary";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import "../Layout/Layout.css";
import Navigation from "../../components/Navigation/Navigation";
import SideDrawerElements from "../SideDrawer/SideDrawerElements";

class Layout extends Component{

    state={display:false}

    SideDrawerHandler = ()=>{
        let display = this.state.display;
        this.setState({display : !display});
    }

    click=()=>{
        alert("hi")
    }

render(props){

    let SideDrawer = null;

    if(this.state.display){
        SideDrawer = (<div class="sideDrawer">
            <SideDrawerElements click={this.click} />
        </div>)
    }


    return(
    <Auxillary>
        <Navigation class="sideDrawer" sideDrawer={this.SideDrawerHandler} />
            {SideDrawer}
        <main class="layout">{this.props.children}</main>
        </Auxillary>)
}
}
export default Layout;