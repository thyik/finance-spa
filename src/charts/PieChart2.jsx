import React, { Component } from "react";
import { withFauxDOM } from "react-faux-dom";
import * as d3 from "d3";

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    initChart() {
        const { height, width } = this.props;
        // create a faux div and store its virtual DOM in state.chart
        let faux = this.props.connectFauxDOM("div", "chart");

        const svg = d3
            .select(faux)
            .append("svg")
            .attr("width", width)
            .attr("height", height);
    }

    drawChart() {
        const { data, height, width } = this.props;

        /*         const svg = d3
            .select(this.myRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height); */

        let radius = Math.min(width, height) / 2 - 20;
        let faux = this.props.connectFauxDOM("div", "chart");

        const svg = d3.select("svg");

        var g = svg
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        var color = d3.scaleOrdinal([
            "gray",
            "green",
            "brown",
            "orange",
            "yellow",
            "red",
            "purple",
        ]);

        var pie = d3.pie().value((d) => {
            return d.amt;
        });

        var path = d3
            .arc()
            .outerRadius(radius - 10)
            .innerRadius(50);

        var label = d3
            .arc()
            .outerRadius(radius)
            .innerRadius(radius - 120);

        //console.log(this.state.data);
        /* d3.csv("./dataset/expenses.csv").then((data) => { */
        var arc = g
            .selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

        // draw the pie slice
        arc.append("path")
            .attr("d", path)
            .attr("fill", (d) => {
                return color(d.data.items);
            });

        // draw the text label
        arc.append("text")
            .attr("transform", (d) => {
                return `translate(${label.centroid(d)})`;
            })

            .text((d) => {
                return d.data.items;
            });
        //});

        // draw the chart title
        svg.append("g")
            .attr("transform", `translate(${width / 2 - 160}, 20)`)
            .append("text")
            .text("Expenses this Month - July 2020")
            .attr("class", "title");

        this.props.animateFauxDOM(800);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.data === null || this.props.data.length === 0) {
            console.log("empty");
            return;
        }

        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data,
            });
        }
        this.drawChart();
    }

    componentDidMount() {
        this.initChart();
        this.props.animateFauxDOM(800);
    }

    render() {
        return (
            <div>
                <h2>Here is some fancy data:</h2>
                <div className="renderedD3">{this.props.chart}</div>
            </div>
        );
    }
}

PieChart.defaultProps = {
    chart: "loading",
};

export default withFauxDOM(PieChart);
