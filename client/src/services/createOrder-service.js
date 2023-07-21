import { axiosConn } from "./helper-auth";

export const createOrder = (user) => {
  return axiosConn.post("/create-order", user).then((response) => response);
};
