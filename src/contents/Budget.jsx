import React, { Component } from "react";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import * as d3 from "d3";
import Tableitem from "../components/Tableitem";

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
        this.loadByExpenses();
    }

    loadByExpenses = () => {
        // data MUST be place in the public folder
        // and the path is relative to public folder
        d3.csv("./dataset/expenses.csv").then((inputData) => {
            this.setState({ pieData: inputData });
        });
    };

    loadByPayee = () => {
        d3.csv("./dataset/payee.csv").then((inputData) => {
            this.setState({ pieData: inputData });
        });
    };

    loadByCategories = () => {
        d3.csv("./dataset/categories.csv").then((inputData) => {
            this.setState({ pieData: inputData });
        });
    };

    dataItems = [
        {
            title: { timeframe: "Timeframe" },
            option: [
                { all: "All Dates" },
                { month: "Monthly" },
                { week: "Weekly" },
                { day: "Daily" },
            ],
        },
        {
            title: { categories: "Categories" },
            option: [
                { all: "All Categories" },
                { edu: "Education" },
                { cloth: "Clothing" },
                { eatout: "Eating Out" },
            ],
        },
        {
            title: { payee: "Payee" },
            option: [{ all: "All Payee" }],
        },
        {
            title: { accounts: "Accounts" },
            option: [{ all: "All Accounts" }, { off: "Off Budget Accounts" }],
        },
    ];

    renderItems = this.dataItems.map((item) => {
        // destruct item
        const { title, option } = item;
        const renderOption = option.map((opt) => {
            return (
                <option value={Object.keys(opt)}>{Object.values(opt)}</option>
            );
        });

        return (
            <React.Fragment>
                <label>{Object.values(title)}</label>
                <select name={Object.values(title)} id={Object.values(title)}>
                    {renderOption}
                </select>
            </React.Fragment>
        );
    });

    render() {
        return (
            <div id="budget" className="condiv">
                <h1>This is Budget Page</h1>
                <div className="groups">
                    <button onClick={this.loadByCategories}>
                        Spending By Category
                    </button>
                    <button onClick={this.loadByPayee}>
                        Spending By Payee
                    </button>
                    <button onClick={this.loadByExpenses}>
                        Spending By Expense
                    </button>
                    <button>Net Worth</button>
                </div>
                <div className="grid-subgroup">
                    <label>Spending by Category</label>
                    <button>Export</button>
                    <button>Print</button>
                </div>
                <div className="grid-table">{this.renderItems}</div>
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
