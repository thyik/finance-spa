import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: "",
        };
    }

    activeItem = (x) => {
        if (this.state.NavItemId.length > 0) {
            document
                .getElementById(this.state.NavItemActive)
                .classList.remove("active");
        }

        this.setState({ NavItemActive: x }, () => {
            document.getElementById(
                this.state.NavItemActive.classList.add("active")
            );
        });
    };

    render() {
        return (
            <li>
                <Link
                    to={this.props.tolink}
                    onClick={this.props.activec.bind(this, this.props.item)}
                >
                    {this.props.item}
                </Link>
            </li>
        );
    }
}

export default Navitem;
