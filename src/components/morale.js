import React, { Component } from 'react';

class Morale extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="morale">
                <div className="morale-row">
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container morale-token"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                    <div className="morale-container"/>
                </div>
            </div>
        )
    }
}

export default Morale;