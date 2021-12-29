export const APIUrls = {
  login: () => " https://att-reg.herokuapp.com/api/user/login",
  signup: () => "https://att-reg.herokuapp.com/api/user/register",
  checkAuthentication: () =>
    "https://att-reg.herokuapp.com/api/user/authenticate",
  punchIn: () => "https://att-reg.herokuapp.com/api/attendance/punchin",
  punchOut: () => "https://att-reg.herokuapp.com/api/attendance/punchout",
  fetchPunchDetails: (id) =>
    `https://att-reg.herokuapp.com/api/attendance/fetch-punch-details?user_id=${id}`,
};