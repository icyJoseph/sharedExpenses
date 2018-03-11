import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const RoundButton = ({ label, callback }) => {
  return (
    <Button
      label={label}
      style={{
        color: "#fff",
        backgroundColor: "#0cd32a",
        borderColor: "#fff",
        marginRight: "20px",
        marginTop: "-30px",
        width: 60,
        height: 60,
        borderRadius: "50%",
        borderStyle: "none",
        fontSize: "40pt"
      }}
      callback={callback}
    />
  );
};

export default RoundButton;

RoundButton.propTypes = {
  label: PropTypes.string,
  callback: PropTypes.func
};
