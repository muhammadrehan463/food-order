import "../index.css";
import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../services/deleteOrder-service";
import { useState } from "react";
import GetOrder from "./GetOrder";

const OrderList = ({ orders }) => {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  const handleBackbtn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleDeletebtn = (e) => {
    e.preventDefault();
    deleteOrder(orderId)
      .then((res) => {
        console.log("code");
        console.log(res);
        console.log("Data deleted");
        alert("Data Deleted");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
      });
  };

  return (
    <div className="main">
      <div className="myDiv">
        <h2>Order Records</h2>
        <input
          className="orderId"
          placeholder="Enter Order ID"
          id="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <button className="btn" onClick={handleBackbtn}>
          Back
        </button>
        <button className="btn" onClick={handleDeletebtn}>
          Delete
        </button>
      </div>
      {/* <div className="myTable"> */}
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Dish Name</th>
            <th>Item Count</th>
            <th>Description</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.dishName}</td>
              <td>{order.itemCount}</td>
              <td>{order.description}</td>
              <td>{order.address}</td>
            </tr>
          ))}
        </tbody>
        ;
      </table>
      {/* </div> */}
      {/* <div className="myTable">
        <button className="btn" onClick={handleDeletebtn}>
          Delete
        </button>
        <button className="btn" onClick={handleBackbtn}>
          Back
        </button>
      </div> */}
    </div>
  );
};

export default OrderList;
