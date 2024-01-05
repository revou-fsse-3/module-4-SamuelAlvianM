import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import List from "./pages/categories/List";
import Edit from "./pages/categories/Edit";
import Add from "./pages/categories/Add";
import { Provider } from "./Provider";
import PublicLayout from "./layout/PublicLayout";
import { useMemo } from "react";

const PrivateOutlet = () => {
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate();
  const isAuth = useMemo(
    () => !!token,
    [navigate]
  )
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  return (
    <Provider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
