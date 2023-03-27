import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginSignUpPage() {
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const loginHandler = async () => {
    let { data } = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    localStorage.setItem("userData", JSON.stringify(data.data));
    navigate("/profile");
  };
  const signUpHandler = async () => {
    let { data } = await axios.post("http://localhost:5000/signup", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone,
    });
    localStorage.setItem("userData", JSON.stringify(data.data));
    navigate("/profile");
  };
  if (isLoginPage) {
    return (
      <>
        <div>Login Page</div>
        <input
          type="email"
          placeholder="Enter you Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => loginHandler()}>Login</button>
        <a href="#" onClick={() => setIsLoginPage(false)}>
          Signup
        </a>
      </>
    );
  } else {
    return (
      <>
        <div>Signup Page</div>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone (Optional)"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signUpHandler()}>Create Account</button>
        <a href="#" onClick={() => setIsLoginPage(true)}>
          Login
        </a>
      </>
    );
  }
}
