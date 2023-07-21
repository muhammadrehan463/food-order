import SignUp from "./components/SignUp";
import CreateOrder from "./components/CreateOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GetOrder from "./components/GetOrder";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import UpdateOrder from "./components/UpdateOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/update-order" element={<UpdateOrder />} />
          <Route path="/get-order" element={<GetOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
