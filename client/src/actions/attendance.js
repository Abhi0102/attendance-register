import { headerWithAuth } from "../helpers/constants";
import { APIUrls } from "../helpers/url";
import { getFormBody } from "../helpers/utils";
import { PUNCH_IN_FAIL, PUNCH_IN_SUCCESS, PUNCH_OUT_FAIL, PUNCH_OUT_SUCCESS } from "./actionType";

export function punchIn(_id, date) {
  return async (dispatch) => {
    const url = APIUrls.punchIn();
    const response = await fetch(url, {
      method: "POST",
      headers: headerWithAuth,
      body: getFormBody({ _id, date }),
    });
    const data = await response.json();
    if (data.data.success) {
      dispatch(punchInSuccess(data.data.message));
    } else {
      dispatch(punchInFailed(data.data.error));
    }
  };
}

export function punchInSuccess(resp) {
  return {
    type: PUNCH_IN_SUCCESS,
    punchDetail: resp,
  };
}

export function punchInFailed(error) {
  return {
    type: PUNCH_IN_FAIL,
    error,
  };
}

export function punchOut(_id, date) {
  return async (dispatch) => {
    const url = APIUrls.punchOut();
    const response = await fetch(url, {
      method: "POST",
      headers: headerWithAuth,
      body: getFormBody({ _id, date }),
    });
    const data = await response.json();
    if (data.data.success) {
      dispatch(punchOutSuccess(data.data.message));
    } else {
      dispatch(punchOutFailed(data.data.error));
    }
  };
}

export function punchOutSuccess(resp) {
  return {
    type: PUNCH_OUT_SUCCESS,
    punchDetail: resp,
  };
}

export function punchOutFailed(error) {
  return {
    type: PUNCH_OUT_FAIL,
    error,
  };
}
