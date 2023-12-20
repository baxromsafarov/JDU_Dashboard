// import axios from "./index";

// class AuthApi {
//   static Login = (data) => {
//     return axios.post(`${base}/login`, data);
//   };

//   static Register = (data) => {
//     return axios.post(`${base}/register`, data);
//   };

//   static Logout = (data) => {
//     return axios.post(`${base}/logout`, data, { headers: { Authorization: `${data.token}` } });
//   };
// }

// let base = "users";

// export default AuthApi;
// https://fsv55ldvld.execute-api.ap-northeast-1.amazonaws.com

// Update the base URL to match the provided API endpoint
const BASE_URL = "https://fsv55ldvld.execute-api.ap-northeast-1.amazonaws.com/default/api/auth";

class AuthApi {
  static Login = async (data) => {
    const response = await fetch(`${BASE_URL}/signIn`, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(response);
    return response;
  };

  // static Register = (data) => {
    // Update this if you have a registration endpoint
  //   return axios.post(`${BASE_URL}/register`, data);
  // };

  static Logout = (data) => {
    // Update this if you have a logout endpoint
    // return axios.post(`${BASE_URL}/logout`, data, { headers: { Authorization: `${data.token}` } });
  };
}

export default AuthApi;
