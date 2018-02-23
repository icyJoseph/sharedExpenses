import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { objectBuilder } from "./Utils";

const Table = ({ data }) => {
  const entries = objectBuilder(data);
  return (
    <Fragment>
      <div>Yay! We have data!</div>
      <ul style={{ listStyle: "none" }}>
        {entries.map(entry => (
          <li key={entry.id}>
            {entry.description} {entry.amount} {entry.status}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Table;

Table.propTypes = {
  data: PropTypes.array
};
