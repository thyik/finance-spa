import React, { Component } from "react";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import * as d3 from "d3";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [12, 5, 6, 6, 9, 10],
            pieData: [
                /* { items: "Fun", amt: 480.0 },
                { items: "Clothing", amt: 270.0 },
                { items: "Eating-Out", amt: 300.0 },
                { items: "Education", amt: 960.0 },
                { items: "Medical", amt: 500.0 },
                { items: "Utilities", amt: 300.0 },
                { items: "Transport", amt: 335.0 }, */
            ],
            width: 700,
            height: 500,
            id: "budget",
        };
    }

    componentDidMount() {
        // data MUST be place in the public folder
        // and the path is relative to public folder
        d3.csv("./dataset/expenses.csv").then((inputData) => {
            this.setState({ pieData: inputData });
        });
    }

    render() {
        return (
            <div id="budget" className="condiv">
                <h1>This is Budget Page</h1>

                {/* <svg width="400" height="450"></svg> */}
                <PieChart
                    data={this.state.pieData}
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
