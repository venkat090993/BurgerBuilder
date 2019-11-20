import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../BurgerIngredient/BurgerIngredient.css";

class BurgerIngredient extends Component{
    render(){

        let ingredient = null;

        switch(this.props.type){
            case("meat"):
            ingredient = <div class="Meat"></div>
            break;

            case("bacon"):
            ingredient = <div class="Bacon"></div>
            break;

            case("salad"):
            ingredient = <div class="Salad"></div>
            break;

            case("cheese"):
            ingredient = <div class="Cheese"></div>
            break;

            case("BreadTop"):
            ingredient = <div class="BreadTop"></div>
            break;

            case("BreadBottom"):
            ingredient = <div class="BreadBottom"></div>
            break;

            default:
                ingredient = null
        }
        return ingredient;
     
    }
}
BurgerIngredient.propTypes={type:PropTypes.string.isRequired}

export default BurgerIngredient;