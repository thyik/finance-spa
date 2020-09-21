import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import Budget from "./contents/Budget";
import Report from "./contents/Report";
import Accounts from "./contents/Accounts";
import Error from "./contents/Error";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Finance SPA</p>
                </header>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/budget" component={Budget} />
                        <Route path="/report" component={Report} />
                        <Route path="/accounts" component={Accounts} />
                        <Route component={Error} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
