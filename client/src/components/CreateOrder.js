import { useState } from "react";
import "../index.css";
import { createOrder } from "../services/createOrder-service";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const [dishName, setDishName] = useState("");
  const [itemCount, setItemCount] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { dishName, itemCount, description, address };
    console.log("data ->>", data);

    createOrder(data)
      .then((res) => {
        console.log(res);
        setDishName("");
        setItemCount("");
        setDescription("");
        setAddress("");
        alert("Order Placed");
        console.log("Success log");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
      });
  };

  const handleBackbtn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="order-form">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dishName">Dish name:</label>
        <input
          placeholder="Dish Name"
          type="text"
          id="dishName"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          required
        />

        <label htmlFor="itemCount">Item Count:</label>
        <input
          placeholder="Item Count"
          type="number"
          id="itemCount"
          value={itemCount}
          onChange={(e) => setItemCount(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          placeholder="Description"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          placeholder="Address"
          type="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button onClick={handleBackbtn}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateOrder;
