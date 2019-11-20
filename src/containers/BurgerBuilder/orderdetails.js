import React from 'react';

const OrderDetails =(props)=>{
    return(
        <div>
            <p>{props.name} : {props.quantity}</p>
            </div>
    )
}

export default OrderDetails;