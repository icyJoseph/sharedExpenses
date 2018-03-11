import axios from "axios";

const apiEndPoint = process.env.REACT_APP_WEB_TASK_GOOGLE_SPREADSHEET;
export const rows = token => {
  return axios
    .post(
      apiEndPoint,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(res => res.data);
};

export const addRow = (token, row) => {
  return axios
    .post(
      `${apiEndPoint}/addRow`,
      { row },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(res => res.data);
};

export const getUserMetaData = sub => {
  return axios
    .post(
      process.env.REACT_APP_WEB_TASK_JWT,
      { app_name: "shared" },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(res => res.data.result)
    .then(JSON.parse)
    .then(res => res.access_token)
    .then(token =>
      axios
        .get(`${process.env.REACT_APP_USER_END_POINT}${sub}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => res.data.user_metadata)
    );
};
