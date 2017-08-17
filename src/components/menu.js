import React, { Component } from 'react';
import NumberPicker from "react-number-picker";
import "react-number-picker/dist/style.css";


class Menu extends Component {
    render() {
        return (
            
                <div className="col-xs-12 col-md-6">
                <div className="col-xs-6 col-md-6">
                    <h3 className="col-xs-6 col-md-6">{this.props.drinks.strDrink}</h3>
                    <ol className="col-xs-6 col-md-6">
                        <li>{this.props.drinks.strIngredient1}</li>
                        <li>{this.props.drinks.strIngredient2}</li>
                        <li>{this.props.drinks.strIngredient3}</li>
                        <li>{this.props.drinks.strIngredient4}</li>
                    </ol>
                    </div>
                    <div className="col-xs-6 col-md-6 numberPicker">
                    <NumberPicker className="price" currency={"$" + this.props.input.currency} value={this.props.input.value} onChange={this.props.handleChange} />
                    <button className="addButton btn btn-success" onClick={() => {
                        this.props.handleAdd({
                            name: this.props.drinks.strDrink, 
                            amount: this.props.input.value,
                            price: this.props.input.currency
                        })
                    }}>Add</button>
                    </div> 
                </div>
            
        );
    }
}

export default Menu;