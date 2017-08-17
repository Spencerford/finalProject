import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-12 divider">
                    <h1 className="text-center howItTitle">How It Works:</h1>
                    <div className="col-xs-offset-3 col-xs-7 col-md-offset-5 col-md-5 workPoints">
                        <h4>Select your drink and quantitiy</h4>
                        <h4>Add To Cart</h4>
                        <h4>Have your drinks ready in minutes!</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowItWorks;