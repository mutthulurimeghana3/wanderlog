import { Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import ExplorePage from "./pages/ExplorePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";
import PrivateRoute from "./components/Layout/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import CountryCard from "./components/Explore/CountryCard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <ExplorePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/country/:code"
          element={
            <PrivateRoute>
              <CountryDetailPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/bucketlist"
          element={
            <PrivateRoute>
              <BucketListPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;