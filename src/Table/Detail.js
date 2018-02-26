import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { capitalizer } from "./Utils";

class Detail extends Component {
  state = {
    item: {
      title: "Nothing",
      description: "This seems like an error",
      amount: "0",
      owner: "",
      logdate: "",
      status: "",
      date: ""
    }
  };

  componentDidMount() {
    const sheetData = localStorage.getItem("sheetData");
    return Promise.resolve()
      .then(() => JSON.parse(sheetData))
      .then(res => res.filter(e => e.id === this.props.match.params.id)[0])
      .then(res => this.setState({ item: res }));
  }

  render() {
    const { item } = this.state;
    return (
      <Fragment>
        <div style={{ margin: "10% auto", textAlign: "justify", width: "70%" }}>
          <h4>{capitalizer(item.title)}</h4>
          <p>{capitalizer(item.description)}</p>
          <p>{item.amount}</p>
          <p>Owned by: {item.owner}</p>
          <p>Saved the: {item.logdate}</p>
          <p>Receipt from the: {item.date}</p>
          <p>Status: {item.status}</p>
        </div>
        <div
          style={{
            width: "70%",
            margin: "15% auto auto auto",
            textAlign: "center"
          }}
        >
          <button
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderColor: "#fff",
              margin: "20px",
              width: 150,
              height: 40,
              borderRadius: 10
            }}
            onClick={() => 1}
          >
            Paid
          </button>
          <button
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderColor: "#fff",
              margin: "20px",
              width: 150,
              height: 40,
              borderRadius: 10
            }}
            onClick={() => 1}
          >
            Edit
          </button>
        </div>
        <div style={{ width: "70%", margin: "5% auto", textAlign: "center" }}>
          <button
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderColor: "#fff",
              margin: "20px",
              width: 150,
              height: 40,
              borderRadius: 10
            }}
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Detail;

Detail.propTypes = {
  data: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
};
