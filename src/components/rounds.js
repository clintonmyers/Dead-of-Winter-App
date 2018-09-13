import React, { Component } from 'react';

class Rounds extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rounds">
                <div className="rounds-row">
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container rounds-token"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                    <div className="rounds-container"/>
                </div>
            </div>
        )
    }
}

export default Rounds;