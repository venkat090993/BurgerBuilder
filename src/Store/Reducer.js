import { strictEqual } from "assert"

const initialState ={ingredients:{
    salad:0,
    bacon:0,
    cheese:0,
    meat:0
}, initialPrice:4}

const INGREDIENT_PRICES={salad:0.2,
    bacon:0.5,
    meat:0.8,
    cheese:0.9}

const reducer = (state=initialState, action)=>{

    switch(action.type){
        case "ON_ADD":{
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientsName] : state.ingredients[action.ingredientsName] + 1
                },
                initialPrice: state.initialPrice + INGREDIENT_PRICES[action.ingredientsName]
                
                            
            }
        }

        case "ON_RED":{
            if(state.ingredients[action.ingredientsName] !=0 ){
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientsName] : state.ingredients[action.ingredientsName] - 1
                }, 
                initialPrice : state.initialPrice - INGREDIENT_PRICES[action.ingredientsName]
            
            }}
        }
        default : return state

    }

}

export default reducer;