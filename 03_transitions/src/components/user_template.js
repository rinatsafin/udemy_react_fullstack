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
  mother: PropTypes.string.isRequired
};

export default UserTemplate;
