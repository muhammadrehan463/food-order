import { axiosConn } from "./helper-auth";

export const deleteOrder = (orderId) => {
  return axiosConn
    .delete(`/delete-order/${orderId}`)
    .then((response) => response);
};
