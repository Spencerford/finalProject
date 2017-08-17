import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions";
import autoBind from "react-autobind";

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            category: ""
        }
        autoBind(this);
    }

    componentWillMount() {
        this
            .props
            .loadCategories();
    }
    genList() {
        return this
            .props
            .list
            .map((item, index) => {
                return <option key={item.strCategory + index} value={item.strCategory}>{item.strCategory}</option>
            })
    }

    handleChange(event) {
        if (event.target.value !== "") {
            this
                .props
                .loadData(event.target.value);
        }
    }

    render() {
        return (
            <div className="">
                <div className="col-md-6 categoryPic">
                </div>
                <div className="category col-md-6 text-center">
                    <h3>Drink Category</h3>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="">Select Category</option>
                        {this.genList()}
                    </select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(CategoryList);