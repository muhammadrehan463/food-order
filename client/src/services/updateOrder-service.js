import { axiosConn } from "./helper-auth";

export const updateOrder = (user) => {
  return axiosConn.put("/update-order", user).then((response) => response);
};
