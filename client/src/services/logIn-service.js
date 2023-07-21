import { myAxios } from "./helper-noAuth";
export const logIn = (user) => {
  return myAxios.post("/authenticate", user).then((response) => response);
};
