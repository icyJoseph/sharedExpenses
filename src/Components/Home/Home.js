import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";
import Profile from "../Profile/Profile";
import Table from "../Table/Table";
import RoundButton from "../Commons/RoundButton";
import { rows } from "../../Api";

class Home extends Component {
  state = {
    data: [],
    spinner: true
  };

  componentDidMount() {
    const loading = setTimeout(() => this.getData(), 300);
    return loading;
  }

  getData = () => {
    return Promise.resolve(localStorage.getItem("access_token"))
      .then(res => rows(res))
      .then(res => this.setState({ data: res, spinner: false }))
      .then(this.saveToLocalStorage);
  };

  saveToLocalStorage = () => {
    localStorage.setItem("sheetData", JSON.stringify(this.state.data));
  };

  render() {
    const { auth } = this.props;
    const { data, spinner } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          <h2 style={{ color: "#000" }}>Welcome!</h2>
        </div>
        <div style={styles.content}>
          {spinner ? (
            <Spinner
              name="ball-pulse-rise"
              color="black"
              style={{ margin: "130px auto" }}
            />
          ) : (
            <Table data={data} />
          )}
        </div>
        <div style={styles.profile}>
          <Profile auth={auth} />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
          {!spinner && (
            <RoundButton
              label="+"
              callback={() => this.props.history.push("/home/add")}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  auth: PropTypes.object,
  history: PropTypes.object
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100vh"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  }
};
