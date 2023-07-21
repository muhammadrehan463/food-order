import { myAxios } from "./helper-noAuth";
export const signUp = (user) => {
  return myAxios.post("/register", user).then((response) => response);
};
