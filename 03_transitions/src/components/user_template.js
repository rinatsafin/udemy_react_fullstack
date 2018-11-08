import React from "react";
import PropTypes from "prop-types";

const UserTemplate = props => {
  return <div>Template: name is - {props.getName()}</div>;
};

UserTemplate.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(["Francis", "Steve"])
  ]),
  lastName: PropTypes.oneOf(["Jones", "Doe"]),
  age: PropTypes.number,
  spanish: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  car: PropTypes.object,
  getName: PropTypes.func,
  mother: PropTypes.string.isRequired,
  customValid: function(props, propName, componentName) {
    if (props[propName] !== "success") {
      return new Error(
        `The value ${props[propName]} is incorrect, should be "success"`
      );
    }
  }
};

export default UserTemplate;
