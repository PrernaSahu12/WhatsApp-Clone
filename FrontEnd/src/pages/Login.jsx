import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });
      console.log("Login seccess:", res.data);
      // Agar token ya user data mila hai to localStorage me save kardo
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid credentials");
    }
    console.log({ email, password });
  };
  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "60px auto",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "28px",
          color: "#4b57co",
        }}
      >
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid #c5cae9",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #c5cae9",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            background: "linear-gradient(90deg,#4b57c0,#2d81e7)",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Login
        </button>
      </form>
      <p
        style={{
          textAlign: "center",
          marginTop: "16px",
          color: "#555",
        }}
      >
        Don't have an account?{" "}
        <span
          style={{ color: "#4b57c0", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
