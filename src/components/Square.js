import React, { Component } from 'react'

export default class Square extends Component {

    // state = {
    //     clicked: this.props.active
    // }

    // handleClick = (event) => {
    //     this.setState({
    //         clicked: !this.state.clicked
    //     })
    // }

    render() {
        let activeClass = this.props.active ? " active" : ""

        return (
            <div 
                className={"Square-div" + activeClass}
                onClick={this.handleClick}
            ></div>
        )
    }
}
