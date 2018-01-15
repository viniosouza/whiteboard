import * as Api from "../constants/Endpoint";
import axios from "axios";
import {
  COMPANY_DETAILS,
  COMPANY_DETAILS_FAILED
} from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

// CompanyDetails
export const companyDetails = jobId => dispatch =>
  axios
    .get(`${Api.ENDPOINT_URL}/jobs/${jobId}`, config)
    .then(response => {
      return dispatch({
        type: COMPANY_DETAILS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: COMPANY_DETAILS_FAILED,
        payload: error
      })
    );
