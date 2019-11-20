import React,{Component} from 'react';
import "../ContactData/ContactData.css";
import axios from "axios";

class ContactData extends Component{
    state={name:"",
    email:"",
    address:{
        street:"",
        pinCode:""
    }
         
    }

    orderClick =(event) =>{
        event.preventDefault()
        
            const orders = {ingredients: this.props.ingredients,
                            customer:this.state,
                        totalPrice:this.props.totalPrice}
                        console.log(orders)


            axios.post("https://burger-app-a10d6.firebaseio.com/orders.json",orders).then(res=>{
                this.props.history.push('/');
            })
        
        }
            

            
    render(){
        return(
            <form className="forms">
                <input type="text" onChange={(event)=>{
                    this.setState({name:event.target.value})
                }} />
                <input type="email" onChange={(event)=>{
                    this.setState({email:event.target.value})
                }} />
                <input type="text" onChange={(event)=>{
                    this.setState({street:event.target.value})
                }} />
                <input type="text" onChange={(event)=>{
                    this.setState({pinCode:event.target.value})
                }} />

                <button onClick={(event)=>{this.orderClick(event)}}>Submit</button>

            </form>
        )
    }
}

export default ContactData;