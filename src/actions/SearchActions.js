import * as Api from "../constants/Endpoint";
import axios from "axios";
import {
  SET_SEARCH,
  SET_SEARCH_FAILED,
  JOB_LIST,
  JOB_LIST_FAILED
} from "../constants/ActionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

export const searchJob = pesquisa => dispatch =>
  axios
    .get(`${Api.ENDPOINT_URL}/jobs?q=${pesquisa}`)
    .then(response => {
      return dispatch({
        type: SET_SEARCH,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: SET_SEARCH_FAILED,
        payload: error
      })
    );

export const JobList = () => dispatch =>
  axios
    .get(`${Api.ENDPOINT_URL}/jobs`)
    .then(response => {
      return dispatch({
        type: JOB_LIST,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: JOB_LIST_FAILED,
        payload: error
      })
    );
