import React, {Component} from 'react';

class Body extends Component {
    render() {
        return (
            <div className="body">
                <video autoPlay loop id="video-background">
                    <source src="/images/barCounter.mp4" type="video/mp4"/>
                </video>
                <h1 id="mainTitle" className="animated text-center mainTitle">BeerMe</h1>
                <h3 className="text-center tagline">Ordering a drink with Ease</h3>
            </div>
        );
    }
}

export default Body;