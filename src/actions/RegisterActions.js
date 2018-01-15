import * as Api from "../constants/Endpoint";
import axios from "axios";
import {
  REGISTER_COMPANY,
  REGISTER_COMPANY_FAILED
} from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const registerCompany = data => dispatch =>
  axios
    .post(`${Api.ENDPOINT_URL}/jobs`, data, config)
    .then(response =>
      dispatch({
        type: REGISTER_COMPANY,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: REGISTER_COMPANY_FAILED,
        payload: error
      })
    );
