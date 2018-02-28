import React, { Component, Fragment } from "react";
import ReactList from "react-list";
import PropTypes from "prop-types";
import Row from "./Row";

class Table extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
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
    const { data } = this.state;
    return (
      <Fragment>
        <div style={{ flex: 1, flexDirection: "column", margin: 10 }}>
          Yay! We have data!
        </div>
        <div
          style={{
            overflow: "auto",
            width: "90%",
            marginBottom: 25,
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
