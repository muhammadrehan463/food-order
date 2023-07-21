import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { logIn } from "../services/logIn-service";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log("data ->>", data);

    logIn(data)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        console.log("Success log");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
      });
  };

  const handleBackbtn = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button onClick={handleBackbtn}>Back</button>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
