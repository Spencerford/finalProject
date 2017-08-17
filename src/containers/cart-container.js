import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import autoBind from "react-autobind";

import Cart from "../components/cart.js";

class CartContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            cart: "",
            edit: false
        }
        autoBind(this);
    }

    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        });
    };

    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        });
    };

    

    render() {
        return (
            
                <Cart handleRemove={this.props.removeItem} handleChange={this.handleChange} toggleEdit={this.toggleEdit} input={this.state} cart={this.props.cart}/>
                
            
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(CartContainer);