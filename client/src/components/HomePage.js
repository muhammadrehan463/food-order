import { useNavigate } from "react-router-dom";
import "../index.css";

const HomePage = () => {
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <div className="login">
        <p>If you have an account click to login</p>
        <button onClick={handleLogin}>Log In</button>
      </div>
      <div className="signup">
        <p>If you want to register click the button below</p>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default HomePage;
