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

// export const APIUrls = {
//   login: () => " http://localhost:8000/api/user/login",
//   signup: () => "http://localhost:8000/api/user/register",
//   checkAuthentication: () => "http://localhost:8000/api/user/authenticate",
//   punchIn: () => "http://localhost:8000/api/attendance/punchin",
//   punchOut: () => "http://localhost:8000/api/attendance/punchout",
//   fetchPunchDetails: (id) =>
//     `http://localhost:8000/api/attendance/fetch-punch-details?user_id=${id}`,
// };
