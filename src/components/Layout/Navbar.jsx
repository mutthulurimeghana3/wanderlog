import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function Navbar() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>WanderLog</h2>

      <div>
        <Link to="/explore">Explore</Link>
        <Link to="/bucketlist">Bucket List</Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;