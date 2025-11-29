import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Todo App</h1>
      <p style={{ marginBottom: "20px" }}>
        Organize your tasks efficiently with this simple CRUD Todo Manager.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <Link to="/login" className="btn btn-primary" style={{ textAlign: "center" }}>
          Login to Create Notes
        </Link>

        <Link to="/todos" className="btn" style={{ textAlign: "center", background: "#e5e7eb" }}>
          View Todos
        </Link>
      </div>
    </div>
  );
}
