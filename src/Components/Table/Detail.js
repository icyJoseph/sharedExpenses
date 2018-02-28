import React, { Component } from "react";
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
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            textAlign: "justify",
            width: "80%"
          }}
        >
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
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            marginTop: "75px"
          }}
        >
          <a
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderColor: "#fff",
              marginTop: "20px",
              width: 150,
              height: 60,
              borderRadius: 10,
              borderStyle: "solid",
              textAlign: "center",
              cursor: "pointer"
            }}
            onClick={() => 1}
          >
            <p style={{ fontSize: "14pt" }}>Paid</p>
          </a>
          <a
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderColor: "#fff",
              marginTop: "20px",
              width: 150,
              height: 60,
              borderRadius: 10,
              borderStyle: "solid",
              textAlign: "center",
              cursor: "pointer"
            }}
            onClick={() => 1}
          >
            <p style={{ fontSize: "14pt" }}>Edit</p>
          </a>
          <a
            style={{
              color: "#fff",
              backgroundColor: "black",
              borderColor: "#fff",
              marginTop: "20px",
              width: 150,
              height: 60,
              borderRadius: 10,
              borderStyle: "solid",
              textAlign: "center",
              cursor: "pointer"
            }}
            onClick={() => this.props.history.goBack()}
          >
            <p style={{ fontSize: "14pt" }}>Back</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Detail;

Detail.propTypes = {
  data: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
};
