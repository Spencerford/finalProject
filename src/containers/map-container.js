import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions";
import autoBind from "react-autobind";

import GoogleMapCustom from "../components/map.js";

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: null,
            width: 0,
            padding: 0,
            lat: 0,
            lng: 0,
            bar: {}
        };
        autoBind(this);
    }
    handleSelectMarker(bar) {
        
        this.setState({bar, padding: "20px 40px", width: "200px"});
    }

    handleClose() {
        this.setState({width: 0, padding: 0});
    }

    componentWillMount(){
        this.props.loadMarkers()
    }

    render() {
        
        return (
            <div id="mapPage" className="map-container">
                <div className="mapTitle">
                    <h1 className="text-center">See what bars are close to you!</h1>
                </div>
                <GoogleMapCustom

                    handleSelectMarker={this.handleSelectMarker}
                    lat={this.props.lat}
                    lng={this.props.lng}
                    containerElement={< div style = {{height: `400px`, width: "100%"}}/>}
                    mapElement={< div style = {{height: `100%`}}/>}
                    onMapLoad={() => {}}
                    onMapClick={() => {}}
                    markers={this.props.markers}
                    onMarkerRightClick={() => {}}/>
                <div
                    className="map-label"
                    style={{
                    width: this.state.width,
                    padding: this.state.padding
                }}>
                    <h2>{this.state.bar.label}</h2>
                    <p>{this.state.bar.description}</p>
                    <button className="close-btn" onClick={this.handleClose}>X</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators)(MapContainer);