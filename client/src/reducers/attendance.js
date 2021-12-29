import {
  PUNCH_IN_FAIL,
  PUNCH_IN_SUCCESS,
  PUNCH_OUT_FAIL,
  PUNCH_OUT_SUCCESS,
} from "../actions/actionType";

const initialAttendanceState = {
  punchDetail: [],
  error: null,
};
export default function attendance(state = initialAttendanceState, action) {
  switch (action.type) {
    case PUNCH_IN_FAIL:
    case PUNCH_OUT_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case PUNCH_IN_SUCCESS:
    case PUNCH_OUT_SUCCESS:
      return {
        ...state,
        // punchDetail: [action.punchDetail, ...punchDetail],
        error: null,
      };
    default:
      return state;
  }
}
