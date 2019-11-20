import React, {Component} from 'react';
import Auxillary from "../../HOC/Auxillary"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col} from 'reactstrap';
import OrderDetails from "../BurgerBuilder/orderdetails";
import Payments from "../BurgerBuilder/Payments";
import axios from '../../../src/axios-orders';
import Spinner from '../Spinner/Spinner';
import withError from '../../HOC/withErrorHandler';
import {connect} from 'react-redux'


class BurgerBuilder extends Component{
            state = {ingredient:null, 
                                total:4, 
                                visible: false, innerVisibility: false, sideDrawer:false, loader:false}

                                componentDidMount(){
                                    axios.get("https://burger-app-a10d6.firebaseio.com/ingredients.json").then(response=>{
                                        this.setState({ingredient:response.data})
                                    })
                                }

                        //         addOneFromAllIngredients=()=>{

                        //             const ingredient = {...this.this.props.ing};
                        //             const total = {...this.state.total}
                        //             const addTotal = 6.40;
                        //             Object.keys(ingredient).map(igKey=>{

                        //                 return(
                        //                     ingredient[igKey] = 1
                        //                 )
                                        
                        //                 })

                        //             this.setState({ingredient:ingredient, total: addTotal})
                        //         }

                                                            
                        //         addIngredientHandler=(type)=>{
                        //             const oldCount = this.state.ingredient[type];
                        //             const updatedcount = oldCount + 1;
                        //             const newPrice = INGREDIENT_PRICES[type];
                        //             const oldPrice = this.state.total;
                        //             const totalPrice = newPrice + oldPrice;
                        //             const updatedIngredients = {...this.state.ingredient};
                        //             updatedIngredients[type] = updatedcount;
                        //             this.setState({ingredient:updatedIngredients, total:totalPrice})                                                      
                        //     }
                        
                        //     removeIngredientHandler=(type)=>{
                        //         const oldCount = this.state.ingredient[type];
                        //         if (oldCount <= 0){return }
                        //         const updatedcount = oldCount - 1;
                        //         const oldPrice = this.state.total;
                        //         const newPrice = INGREDIENT_PRICES[type];
                        //         const totalPrice = oldPrice - newPrice;
                        //         const updatedIngredients = {...this.state.ingredient};
                        //         updatedIngredients[type] = updatedcount;
                        //         this.setState({ingredient:updatedIngredients, total:totalPrice });
                                
                                
                        // }

                        resetIngredients=()=>{
                           let newVal = {...this.props.ing}
                           let total = {...this.state.total}
                           total = 4;
                           Object.keys(newVal).map(igKey=>{
                               return(
                                   newVal[igKey] = 0
                               )
                           })
                           this.setState({ingredient : newVal, total:total})
                          
                        }
                        AlertVisibleHandler=()=>{
                            const visible = this.state.visible;
                            this.setState({visible:true})
                               }
                                                  
                        CloseAlertHandler=()=>{
                            const visible = this.state.visible;
                            this.setState({visible:false})                            
                        }
                        
                        innerModalwindow =()=>{
                            const innerVisibility = this.state.innerVisibility;
                            this.setState({innerVisibility : !innerVisibility})
                        }
                        orderRequest=()=>{
                            const searchParam = [];
                            for(let key in this.state.ingredient){
                                    searchParam.push(encodeURIComponent(key) + "=" + encodeURIComponent(this.state.ingredient[key]))
                            }
                            searchParam.push('price=' + this.state.total)
                            const searchString = searchParam.join("&");
                            console.log(searchString)
                            this.setState({loader:true})

                            
                                this.setState({loader:false, visible:false})
                                this.props.history.push({
                                    pathname:"/CheckoutPage",
                                       search:"?" + searchString
                                })
                            
                        }
                        
                        
    render(){

        let burger = <Spinner />
        let orderDetails = null;

        if(this.state.ingredient){
                burger = (
                    <Auxillary>
<Burger ingredient = {this.props.ing} className="burger" />
                            <BuildControls resetIng={this.resetIngredients} addIngredient={this.props.onadd} removeIngredient={this.props.onrem} totalPrice={this.props.totalPrice} addOneFromAll={this.addOneFromAllIngredients} AlertVisible={this.AlertVisibleHandler} />
                       
                    </Auxillary>
                )

                orderDetails = Object.keys(this.props.ing).map(ingredient=>{
                    return(
                        
                        <OrderDetails name={ingredient} quantity={this.props.ing[ingredient]} />
                    )
                })
        }

        

      if (this.state.loader){
          orderDetails = (<Spinner/>)
      }
      
   
            return(
                <Auxillary> 
                <Container>
                    <Row>
                        <Col>
                        {burger}
                         </Col>
                    </Row>
                </Container>
                <Modal isOpen={this.state.visible}>
                <ModalHeader>Purchase Page</ModalHeader>
                <ModalBody><div>
                {orderDetails}
                </div></ModalBody>
                <Modal isOpen={this.state.innerVisibility}>
                    <ModalBody>
                        <Payments />
                    </ModalBody> 
                    <ModalFooter>
                    <Button color="danger" onClick={this.innerModalwindow}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <ModalFooter>
                    <Button color="success" onClick={this.orderRequest}>Confirm Order</Button>
                    <Button color="danger" onClick={this.CloseAlertHandler}>Cancel</Button>
                </ModalFooter>
                </Modal>
                 </Auxillary>   
            
        )
    }
}

const mapStateToProps = state =>{

   return{
       ing : state.ingredients,
       totalPrice: state.initialPrice
   }
}

const mapDispatchToProps = dispatch =>{

    return{
        onadd : (ingName)=>dispatch({
            type:"ON_ADD",
            ingredientsName: ingName
        }),
        onrem : (ingName)=>dispatch({
            type:"ON_RED",
            ingredientsName: ingName
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withError(BurgerBuilder, axios));