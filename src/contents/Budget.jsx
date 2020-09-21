import React, { Component } from "react";
import BarChart from "../charts/BarChart";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [12, 5, 6, 6, 9, 10],
            width: 700,
            height: 500,
            id: "budget",
        };
    }

    render() {
        return (
            <div id="budget" className="condiv">
                <h1>This is Budget Page</h1>

                {/* <svg width="400" height="450"></svg> */}
                <BarChart
                    data={this.state.data}
                    width={this.state.width}
                    height={this.state.height}
                />

                {/* <script src="svgChart3.js"></script> */}
                {/*                 <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" />
                </svg> */}
            </div>
        );
    }
}

export default Budget;
