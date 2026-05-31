import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "eve.holt@reqres.in" &&
      password.trim() !== ""
    ) {
      login("fake-jwt-token");
      navigate("/explore");
    } else {
      setError(
        "Use eve.holt@reqres.in and any password"
      );
    }
  };

  return (
    <div className="auth-card">
      <h1>WanderLog Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>
      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;