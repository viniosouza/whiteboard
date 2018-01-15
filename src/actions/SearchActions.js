import * as Api from "../constants/Endpoint";
import axios from "axios";
import { SET_SEARCH, SET_SEARCH_FAILED } from "../constants/ActionTypes";

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
