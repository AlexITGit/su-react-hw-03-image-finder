import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({ title, clickHandler, disabled }) => {
  return (
    <button className="Button" onClick={clickHandler} disabled={disabled}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
