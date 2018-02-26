import axios from "axios";

export const rows = () => {
  const apiEndPoint = process.env.REACT_APP_WEB_TASK_GOOGLE_SPREADSHEET;
  return axios
    .post(
      apiEndPoint,
      {},
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      return res.data;
    });
};
