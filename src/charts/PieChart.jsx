import React, { Component } from "react";
import * as d3 from "d3";

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };

        this.myRef = React.createRef();
    }

    drawChart() {
        const { data, height, width } = this.props;

        const svg = d3
            .select(this.myRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        let radius = Math.min(width, height) / 2 - 20;

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

        var piedata = [
            { items: "Fun", amt: 480.0 },
            { items: "Clothing", amt: 270.0 },
            { items: "Eating-Out", amt: 300.0 },
            { items: "Education", amt: 960.0 },
            { items: "Medical", amt: 500.0 },
            { items: "Utilities", amt: 300.0 },
            { items: "Transport", amt: 335.0 },
        ];

        var pie = d3.pie().value((d) => {
            return d.amt;
        });

        var path = d3
            .arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var label = d3
            .arc()
            .outerRadius(radius)
            .innerRadius(radius - 80);

        console.log(this.state.data);
        d3.csv("./dataset/expenses.csv").then((data) => {
            var arc = g
                .selectAll(".arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc");

            arc.append("path")
                .attr("d", path)
                .attr("fill", (d) => {
                    return color(d.data.items);
                });

            arc.append("text")
                .attr("transform", (d) => {
                    return `translate(${label.centroid(d)})`;
                })

                .text((d) => {
                    return d.data.items;
                });
        });

        svg.append("g")
            .attr("transform", `translate(${width / 2 - 160}, 20)`)
            .append("text")
            .text("Expenses this Month - July 2020")
            .attr("class", "title");
    }

    componentDidMount() {
        this.drawChart();
    }

    render() {
        return <div ref={this.myRef}></div>;
        /* return <div id={"#" + this.props.id}></div>; */
    }
}

export default PieChart;
