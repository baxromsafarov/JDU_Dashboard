let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "https://ktd5kacfz5.execute-api.ap-northeast-1.amazonaws.com/default/";
}

export const API_SERVER = BACKEND_SERVER;