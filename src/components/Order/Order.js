import React from "react";
import '../Order/order.css'

const order = (props)=>{

    const ingredient = [];
    console.log(props.ingredients)

    for(let key in props.ingredients){
            ingredient.push({
                name:key,
                value:props.ingredients[key]
            })
    }

    const out = ingredient.map(ingre=>{
        return(
            <span>{ingre.name} ({ingre.value})</span>
        )
    })

    return(
        <div className="Order">
            <p>Ingredients: {out}</p>
            <p>Price: <strong> {props.price} USD</strong></p>
        </div>
    )
}

export default order;