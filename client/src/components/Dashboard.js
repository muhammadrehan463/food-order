import { useNavigate } from "react-router-dom";
import "../index.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateReq = (e) => {
    e.preventDefault();
    navigate("/create-order");
  };

  const handleUpdateReq = (e) => {
    e.preventDefault();
    navigate("/update-order");
  };

  const handleGetReq = (e) => {
    e.preventDefault();
    navigate("/get-order");
  };
  const handleLogOutReq = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      localStorage.clear();
      console.log(localStorage.getItem("token"));
      navigate("/");
    } catch (error) {
      alert("Something went wrong while logging out");
      console.log(error);
    }
  };
  return (
    <div className="home">
      <h1>Welcome To The Restaurant</h1>
      <div className="d1">
        <p>Click the button below to place order</p>
        <button onClick={handleCreateReq}>Create Order</button>
      </div>
      <div className="d2">
        <p>Click the button below to get the orders record</p>
        <button onClick={handleGetReq}>Get Order</button>
      </div>
      <div className="d2">
        <p>Click the button below to Update the order</p>
        <button onClick={handleUpdateReq}>Update Order</button>
      </div>
      <div className="d2">
        <button onClick={handleLogOutReq}>Log Out</button>
      </div>
    </div>
  );
};

export default Dashboard;
