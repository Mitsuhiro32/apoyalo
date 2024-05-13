// import { Component } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/* class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    birthdayButton = () => {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div className="person-card">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthdayButton}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
} */

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const birthdayButton = () => {
        setAge(age + 1);
    }

    return (
        <div className="person-card">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={birthdayButton}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

PersonCard.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired
};

export default PersonCard;
