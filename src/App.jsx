import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import { ForgetPassword } from "./ForgetPassword";
import { Login } from "./Login";
import { VerifyOTP } from "./VerifyOTP";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { API } from "./Api";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/verifyreset" element={<VerifyOTP />} />
        <Route path="/dashboard" element={<Phonelist />} />
      </Routes>
    </div>
  );
}

export default App;

function Phonelist() {
  useEffect(() => {
    fetch(`${API}/users/dashboard`, {
      headers: { "x-auth-token": localStorage.getItem("token") },
    })
      .then((res) => checkAuth(res))
      .then((data) => setmobileList(data))
      .catch((err) => logout());
  }, []);
  const [mobileList, setmobileList] = useState([]);
  console.log(mobileList);
  const navigate = useNavigate();

  function checkAuth(res) {
    if (res.status === 401) {
      throw Error("UnAuthorized");
    } else {
      return res.json();
    }
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="phonelist-container">
      <div className="heading-container">
        <IconButton>
          <AccountBoxIcon />
        </IconButton>
        <h1>Phone Lists</h1>

        <IconButton
          className="logout-btn"
          onClick={() => {
            logout();
          }}
        >
          <LogoutIcon />
        </IconButton>
      </div>
      <div className="mobileList">
        {mobileList.map((mbl, index) => (
          <Phone key={index} mobile={mbl} />
        ))}
      </div>
    </div>
  );
}

function Phone({ mobile }) {
  return (
    <div>
      {" "}
      <div className="phone-container">
        <img className="phone-picture" src={mobile.img} alt={mobile.model} />
        <h2>{mobile.model}</h2>
        <p className="phone-company">{mobile.company}</p>
      </div>
    </div>
  );
}
