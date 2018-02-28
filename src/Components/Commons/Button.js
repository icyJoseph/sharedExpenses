import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, callback, style }) => {
  return (
    <a
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        backgroundColor: "black",
        borderColor: "#fff",
        marginTop: "20px",
        width: 150,
        height: 60,
        borderRadius: 10,
        borderStyle: "solid",
        cursor: "pointer",
        fontSize: "20pt",
        ...style
      }}
      onClick={() => callback()}
    >
      {label}
    </a>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  callback: PropTypes.function,
  style: PropTypes.object
};
