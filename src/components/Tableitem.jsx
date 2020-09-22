import React, { Component } from "react";

class Tableitem extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log(props.data);
    }
    render() {
        // destruct props data
        const { title, option } = this.props.data;
        return (
            <React.Fragment>
                <tr>
                    <td>{Object.values(title)}:</td>
                    <td>
                        <select
                            name={Object.keys(title)}
                            id={Object.keys(title)}
                        >
                            {option.map((item) => {
                                return (
                                    <option value={Object.keys(item)}>
                                        {Object.values(item)}
                                    </option>
                                );
                            })}
                        </select>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default Tableitem;
