import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  try {
    const res = await axios.post("http://localhost:3000/api/auth/register",{
      username,
      email,
      password,
    })
    console.log("register success: ", res.data)
  } catch (err) {
    console.error(err);
    setError(err.response?.data?.message || "something want wrong")
  }
    // After successful registration, redirect to login page
   

  };

  return (
    <div style={{
      maxWidth: "350px",
      margin: "60px auto",
      padding: "32px",
      borderRadius: "16px",
      background: "#f9f9fc",
      boxShadow: "0 4px 20px rgba(0,0,0,0.10)"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "28px",
        color: "#4b57c0"
      }}>
        Create Account
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid #c5cae9",
            fontSize: "16px"
          }}
        />
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
            fontSize: "16px"
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
            fontSize: "16px"
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
            transition: "0.2s"
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
