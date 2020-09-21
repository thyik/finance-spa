import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.myRef = React.createRef();
    }

    drawChart() {
        const { data, height, width } = this.props;

        const svg = d3
            .select(this.myRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => height - 10 * d)
            .attr("width", 40)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }

    componentDidMount() {
        this.drawChart();
    }

    render() {
        return <div ref={this.myRef}></div>;
        /* return <div id={"#" + this.props.id}></div>; */
    }
}

export default BarChart;
