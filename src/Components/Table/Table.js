import React, { Component, Fragment } from "react";
import ReactList from "react-list";
import PropTypes from "prop-types";
import Row from "./Row";
import Debt from "./Debt";
import { debtCalculator } from "./Utils";

class Table extends Component {
  state = {
    data: [],
    total: 0,
    individual: []
  };

  componentDidMount() {
    const { individual, total } = debtCalculator(this.props.data);
    this.setState({ data: this.props.data, total, individual });
  }

  renderItem = (index, key) => (
    <Row
      key={key}
      style={{ height: 30 }}
      data={this.state.data[index]}
      index={index}
    />
  );

  render() {
    const { data, individual, total } = this.state;
    return (
      <Fragment>
        <div style={{ flex: 1, flexDirection: "column", margin: 10 }}>
          <Debt individual={individual} total={total} />
        </div>
        <div
          style={{
            overflow: "auto",
            width: "90%",
            marginBottom: "50px",
            flex: 8,
            flexDirection: "column"
          }}
        >
          <ReactList
            itemRenderer={this.renderItem}
            length={data.length}
            type="uniform"
          />
        </div>
      </Fragment>
    );
  }
}
export default Table;

Table.propTypes = {
  data: PropTypes.array
};
