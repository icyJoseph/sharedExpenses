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
