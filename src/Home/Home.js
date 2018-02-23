import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";
import Profile from "../Profile/Profile";
import Table from "../Table/Table";
import * as api from "../Api/Api";

class Home extends Component {
  state = {
    data: [],
    spinner: true
  };

  componentDidMount() {
    const loading = setTimeout(this.getData, 1000);
    return loading;
  }

  getData = () => {
    const { auth: { userProfile: { sub } } } = this.props;
    api
      .columns({ user_id: sub })
      .then(res => this.setState({ data: res.values, spinner: false }));
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
            <Spinner name="ball-pulse-rise" color="black" />
          ) : (
            <Table data={data} />
          )}
        </div>
        <Profile auth={auth} style={styles.profile} />
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  auth: PropTypes.object
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
  profile: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start"
  }
};
