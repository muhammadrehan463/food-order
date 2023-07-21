import { useState, useEffect } from "react";
import OrderList from "./OrderList";
import getData from "../services/getData-service";

const GetOrder = () => {
  const {
    data: orders,
    isPending,
    error,
  } = getData("http://localhost:8080/api/orders/get-orders");
  return (
    <div className="getData">
      {error && <div> {error} </div>}
      {isPending && <div> Loading.... </div>}
      {orders && <OrderList orders={orders} />}
    </div>
  );
};

export default GetOrder;
