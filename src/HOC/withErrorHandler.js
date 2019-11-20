import React, {Component} from 'react';
import Auxillary from './Auxillary';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const withError = (WrappedComponent, axios)=>{

    return class extends Component{

        state={error:null}


        componentWillMount(){
            axios.interceptors.response.use(null,error=>{
                    alert(error)
            })
        }

                   render(){
           return(
            <Auxillary>
                <div>{this.state.error}</div>
                <WrappedComponent {...this.props} />
        </Auxillary>
            )
        }
    }
}

export default withError;