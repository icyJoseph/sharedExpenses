import axios from "axios";

const googleapis = "https://sheets.googleapis.com/v4/spreadsheets";

export const columns = ({ user_id }) => {
  const api_url = `${googleapis}/${
    process.env.REACT_APP_SPREADSHEET_KEY
  }/values/Sheet1?majorDimension=ROWS`;
  const token = process.env.REACT_APP_JWT;
  return axios
    .post(
      process.env.REACT_APP_WEB_TASK_END_POINT,
      {
        api_url,
        user_id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => res.data.data);
};
