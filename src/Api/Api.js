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
    .then(res => {
      return res.data;
    });
};
