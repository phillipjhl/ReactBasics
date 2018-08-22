import React, { Component, Fragment } from 'react';

/* let Greeting = (props) => {
    return(
        <h1>Hello, {props.name}</h1>
    )
}
*/

class Greeting extends Component {
    constructor() {
        super();
        console.log('in contructor');
        this.state = {
            text: 'Welcome aboard!',
            placeholder: 'Email',
            hasLoaded: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleChange(email) {
        this.setState({ email });
    }

    handleClick() {
        this.setState(prevState => ({
            hasLoaded: !prevState.hasLoaded
        }));
    }

    componentDidMount() {
        console.log('component did mount')
        this.setState({ hasLoaded: true })
    }

    render() {
        const hasLoaded = this.state.hasLoaded;
        if (hasLoaded) {
            return (
                <Fragment>
                    <h1>Hello, {this.props.name}! {this.state.text} </h1>
                    <input placeholder={this.state.placeholder} onChange={(event) => { this.handleChange(event.target.value) }} />
                    <button onClick={this.handleClick} >Click Me!</button>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1>...Loading</h1>
                    <button onClick={this.handleClick} >Click Me!</button>
                </Fragment>
            )
        }
    }
}

export default Greeting;