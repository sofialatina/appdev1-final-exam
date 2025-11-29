import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersAPI } from "../features/todos/todosAPI";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD;
  const navigate = useNavigate();

  const [error, setError] = useState("");

  useEffect(() => {
    getUsersAPI(3).then(setUsers);
  }, []);

  function handleLogin() {
    const foundUser = users.find((user) => user.username === username);

    if (!foundUser) {
      setError("Username not found!");
      return;
    }

    if (password !== SECRET) {
      setError("Incorrect password!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    navigate("/todos");
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <p style={{ marginBottom: "20px", opacity: 0.7 }}>
        Enter your username and secret password.
      </p>

      {error && (
        <div
          style={{
            background: "#fee2e2",
            color: "#b91c1c",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "14px",
            fontSize: "0.9rem",
          }}
        >
          {error}
        </div>
      )}

      {/* Username */}
      <label>Username</label>
      <input
        type="text"
        className="input"
        placeholder="Enter username (e.g. Bret)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "16px" }}
      />

      {/* Password */}
      <label>Password</label>
      <input
        type="password"
        className="input"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      <button
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
