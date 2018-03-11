import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Commons/Button";
import uuid from "uuid/v1";
import { addRow } from "../../Api";

class Add extends Component {
  state = {
    _title: "",
    description: "",
    amount: "",
    number: ""
  };

  handleChange = (e, key) => {
    const value =
      key === "amount" ? parseFloat(e.target.value) : e.target.value;
    this.setState({
      [key]: value
    });
  };

  validateForm = () => {
    const { _title, description, amount } = this.state;
    return _title && description && amount;
  };

  postToSheet = () => {
    // TODO, consider userProfile is undefined
    const token = localStorage.getItem("access_token");
    const metaData = JSON.parse(localStorage.getItem("meta_data"));
    const row = {
      ...this.state,
      _id: uuid(),
      logDate: new Date().toLocaleString().split(",")[0],
      owner: metaData.given_name,
      status: "unpaid",
      currency: "SEK"
    };
    return addRow(token, row).then(this.props.history.goBack());
  };

  render() {
    const { _title, description, amount, number } = this.state;
    const { history } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh"
        }}
      >
        <form style={flexStyle} onSubmit={e => e.preventDefault()}>
          <label style={{ width: "75%" }}>
            Title:
            <textarea
              rows="1"
              style={inputStyle}
              type="text"
              value={_title}
              onChange={e => this.handleChange(e, "_title")}
            />
          </label>
          <label style={{ width: "75%" }}>
            Description:
            <textarea
              rows="2"
              style={inputStyle}
              value={description}
              onChange={e => this.handleChange(e, "description")}
            />
          </label>
          <label style={{ width: "75%" }}>
            Amount:
            <textarea
              rows="1"
              style={inputStyle}
              type="number"
              value={isNaN(amount) ? "" : amount}
              onChange={e => this.handleChange(e, "amount")}
            />
          </label>
          <label style={{ width: "75%" }}>
            Receipt number:
            <textarea
              rows="1"
              style={inputStyle}
              type="text"
              value={number}
              onChange={e => this.handleChange(e, "number")}
            />
          </label>
        </form>
        <div style={flexStyle}>
          <Button
            label="Add"
            style={{
              backgroundColor: "#0cd32a",
              borderStyle: "none"
            }}
            callback={this.postToSheet}
          />
          <Button label="Back" callback={() => history.goBack()} />
        </div>
      </div>
    );
  }
}
export default Add;

Add.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  auth: PropTypes.object
};

const flexStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const inputStyle = {
  width: "100%",
  borderRadius: 1,
  resize: "none",
  fontSize: "15pt"
};
