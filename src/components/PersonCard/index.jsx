import { Component } from "react";
import PropTypes from "prop-types";

class PersonCard extends Component {
    render() {
        return (
            <div className="person-card">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        );
    }
}

PersonCard.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired
};

export default PersonCard;
