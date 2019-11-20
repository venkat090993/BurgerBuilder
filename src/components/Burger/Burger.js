import React from "react";
import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import "../Burger/Burger.css"
import {withRouter} from 'react-router-dom'

const Burger = (props) =>{

    const styleDiffTest = {textAlign:"center"}

    let convertedIngredient = Object.keys(props.ingredient).map((igKey)=>{
        return[...Array(props.ingredient[igKey])].map((_, index)=>{
           return (<BurgerIngredient type={igKey} key={igKey+index} />)       })
    }).reduce((arr, el)=>{return arr.concat(el)},[]
    ) 
            if (convertedIngredient.length === 0){
                convertedIngredient = <p style={styleDiffTest}>Add Ingredients</p>
            }

          
    return(
        
            <div class="burger">
                <BurgerIngredient type={"BreadTop"} />
                {convertedIngredient}
                <BurgerIngredient type={"BreadBottom"} />
            
            </div>
        
    )
  
}

export default withRouter(Burger);