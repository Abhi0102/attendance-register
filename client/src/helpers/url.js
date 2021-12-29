export const APIUrls = {
  login: () => " http://localhost:8000/api/user/login",
  signup: () => "http://localhost:8000/api/user/register",
  checkAuthentication: () => "http://localhost:8000/api/user/authenticate",
  punchIn: () => "http://localhost:8000/api/attendance/punchin",
  punchOut: () => "http://localhost:8000/api/attendance/punchout",
  fetchPunchDetails: (id) =>
    `http://localhost:8000/api/attendance/fetch-punch-details?user_id=${id}`,
};
