import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { capitalizer } from "./Utils";

const Row = ({ data, index }) => {
  const even = index % 2 === 0;

  const style = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: even ? "#fff" : "#000",
    color: even ? "#000" : "#fff"
  };

  return (
    <NavLink
      to={`/detail/${data.id}`}
      style={{ height: 60, width: "100%", verticalAlign: "middle", ...style }}
    >
      <span style={{ width: "25%", position: "absolute", textAlign: "center" }}>
        {data.owner}
      </span>
      <span
        style={{
          width: "25%",
          position: "absolute",
          marginLeft: "25%",
          textAlign: "center"
        }}
      >
        {data.title}
      </span>
      <span
        style={{
          width: "25%",
          position: "absolute",
          marginLeft: "50%",
          textAlign: "center"
        }}
      >
        {data.amount} {data.currency}
      </span>
      <span
        style={{
          width: "25%",
          position: "absolute",
          marginLeft: "75%",
          textAlign: "center"
        }}
      >
        {capitalizer(data.status)}
      </span>
    </NavLink>
  );
};

export default Row;

Row.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
};
