import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-12 bannerComponent">
                    <div  className="col-xs-offset-5 col-xs-3 col-md-offset-8  col-md-4 headerTitle">
                        <h1 className="col-xs-offset-1 col-md-offset-1 menuMainTitle">Menu</h1>
                        <h3 className="menuTagline">Pick Your Poison</h3>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Banner;