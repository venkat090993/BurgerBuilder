import React,{Component} from "react";
import CheckOutSummary from '../../components/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import {connect} from 'react-redux';
class CheckoutPage extends Component{
    
    state={
        ingredient :null,
        totalPrice:0
    }



    componentWillMount(){
            const query = new URLSearchParams(this.props.location.search)
            const ingredient={}
            let price=0;
            for(let param of query.entries()){
                if(param[0] === 'price'){
                        price = param[1]
                }else{

                    ingredient[param[0]] = +param[1]}
                }
            
            this.setState({ingredient:ingredient, totalPrice:price})}
            

            clickHandler=()=>{
                this.props.history.replace('/CheckoutPage/ContactData');
                console.log(this.props)
            }

            prevclickHandler=()=>{
                this.props.history.goBack();
            }

    render(){

        return(<div>
                       <CheckOutSummary ingredient={this.props.ingredient} click={this.clickHandler} prevclick={this.prevclickHandler} />
                       <Route path={this.props.match.path + "/ContactData"} render={(props)=>(<ContactData ingredients={this.state.ingredient} totalPrice={this.props.totalPrice} {...props}/>)} />
       </div>
        )
    }
    
}

const mapPropsToState = state =>{
    return{
        ingredient: state.ingredients,
        totalPrice : state.initialPrice
    }
}

export default connect(mapPropsToState)(CheckoutPage);