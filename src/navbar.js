import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="nav-bar" fluid inverse collapseOnSelect>   
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="col-xs-offset-2 col-md-offset-4  nav-links"><Link id="nav-tabs" to="/">BeerME</Link></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse >
                    <Nav className="tabs" pullRight>
                        <NavItem eventKey={1}><Link id="nav-tabs" to="/">Home</Link></NavItem>
                        <NavItem eventKey={2}><Link id="nav-tabs" to="/map">Map</Link></NavItem>
                        <NavItem eventKey={3}><Link id="nav-tabs" to="/menu">Menu</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;