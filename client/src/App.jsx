import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workspace from "./pages/Workspace";
import Playground from "./pages/Playground";

function ProtectedRoute({
  children,
}) {

  const token =
    localStorage.getItem(
      "token"
    );

  if (!token) {

    return (
      <Navigate to="/login" />
    );

  }

  return children;
}

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/workspace"
          element={
            <ProtectedRoute>

              <Workspace />

            </ProtectedRoute>
          }
        />

        <Route
          path="/playground"
          element={
            <ProtectedRoute>

              <Playground />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;