import React, { Component } from 'react';


import MenuListContainer from "../containers/menu-list-container.js";
import Banner from "./banner.js";
import HowItWorks from "./how-it-works.js";


class BarMenu extends Component {
    render() {
        return (
            <div className="banner container-fluid">
                <Banner />
                <HowItWorks />
                <MenuListContainer />
            </div>
        );
    }
}

export default BarMenu;