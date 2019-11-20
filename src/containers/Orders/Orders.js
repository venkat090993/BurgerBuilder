import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import axios from 'axios';
import Spinner from "../Spinner/Spinner"

class Orders extends Component{

state={orders:[]}

    componentWillMount(){
        axios.get("https://burger-app-a10d6.firebaseio.com/orders.json").then(response=>{
            const res = response.data;
            const orders = []
            for(let key in res){
                orders.push({
                    ...res[key],
                    id:key
                })
            }console.log(orders)
                  this.setState({orders:orders})  })
    }
    render(){

       let orders = this.state.orders.map(order=>{
           return(
               <Order price={order.totalPrice} ingredients={order.ingredients}/>
           )
       })

        return(
            <div>
              {orders}
            </div>
        )
    }
}

export default Orders;