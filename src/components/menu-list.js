import React, { Component } from 'react';

import MenuContainer from "../containers/menu-container.js";

class MenuList extends Component {
    
    genDrink(){
        return this.props.drinks.map((item, index) => {
            return <MenuContainer handleRemove={this.props.handleRemove} handleAdd={this.props.handleAdd} key={item.strDrink + index} drinks={item}/>
        })
        
    }
    
    render() {
        return (
            <div className="menuList col-xs-12 col-md-12">
                <h1 className="menu text-center">MENU</h1>
                {this.genDrink()}
                
            </div>
        );
    }
}

export default MenuList;