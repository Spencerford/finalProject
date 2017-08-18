import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import MapContainer from "./containers/map-container.js";
import CustomNavbar from "./navbar.js";
import Body from "./body.js";
import BarMenu from "./components/barMenu.js";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import "./css/index.css";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <CustomNavbar/>
                        <Switch>
                            <Route exact path="/" component={Body}/>
                            <Route exact path="/map" component={MapContainer} />
                            <Route exact path="/menu" component={BarMenu} />
                        </Switch>
                    </div>
                    
                </HashRouter>
            </div>

        )
    }
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById("root"));
