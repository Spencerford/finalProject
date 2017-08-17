import React, { Component } from 'react';
import autoBind from "react-autobind";

import Menu from "../components/menu.js";

class MenuContainer extends Component {
    constructor(props){
        super(props);
        this.state =  {
            value: 0,
            currency: 7.00
        }
        autoBind(this);
    }

    handleChange(new_value){
        this.setState({
            value: new_value
        })
    }

    render() {
        return (
            <div >
                
                <Menu handleRemove={this.props.handleRemove} handleAdd={this.props.handleAdd} input={this.state} handleChange={this.handleChange} drinks={this.props.drinks}/>
            </div>
        );
    }
}

export default MenuContainer;