import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import { ForgetPassword } from "./ForgetPassword";
import { Login } from "./Login";
import { VerifyOTP } from "./VerifyOTP";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/verifyreset" element={<VerifyOTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
}
