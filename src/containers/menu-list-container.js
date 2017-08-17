import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import autoBind from "react-autobind";

import MenuList from "../components/menu-list.js";
import CategoryList from "../components/category-list.js";
import CartContainer from "../containers/cart-container.js";

class MenuListContainer extends Component {
    
    constructor() {
        super();
        this.state = {
            search: ""
        }
        autoBind(this)
    }

    handleChange(event) {
        this.setState({search: event.target.value})
    }

    render() {

        return (
            <div className="row">
                    
                    <CategoryList />
                   
                    <div className="col-md-6 text-center">
                        <input
                            value={this.state.search}
                            onChange={this.handleChange}
                            placeholder="search"
                            type="text"/>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                            this
                                .props
                                .loadDrink(this.state.search)
                        }}>Search</button>
                        <div className="row">
                            <CartContainer />
                        </div>
                    </div>
                    <div className="row">
                        <MenuList  handleAdd={this.props.addItemToCart} drinks={this.props.drinks}/>
                    </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(MenuListContainer);