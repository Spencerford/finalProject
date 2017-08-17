import React, { Component } from 'react';

class Cart extends Component {
    genCart(){
        return this.props.cart.map((item, index) => {
            return (<li key={item + index} cart={item}>{item.name} <strong>Quantity:</strong> {item.amount} <button className="removeButton" onClick={() => {
                this.props.handleRemove(index)
            }}>x</button></li>)
        })
    };

    render() {
        return (
            
                <div className="col-xs-12 col-md-12">
                    <div className="col-xs-6 col-md-6">
                        <h1>Tab</h1>
                        <h3>Total: ${this.props.cart.reduce((total, item) => {
                            return total + Math.round(100 * (item.price * item.amount)) / 100
                        }, 0)} </h3>
                    </div>
                    
                    <div>
                        <h3 className="text-left">Drinks</h3>
                        <ol className="drinkList text-left">    
                            {this.genCart()}
                        </ol>
                    </div>
                    
                </div>
            
        );
    }
}

export default Cart;