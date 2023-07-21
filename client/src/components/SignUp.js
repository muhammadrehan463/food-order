import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { signUp } from "../services/signUp-service";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };
    console.log("data ->>", data);

    signUp(data)
      .then((res) => {
        console.log(res.data.token);
        console.log("User Registered Successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        prompt("User Registered");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        prompt("Something went wrong");
        console.log("Error log");
      });
  };

  const handleBackbtn = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="signup-form">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
