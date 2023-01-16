import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Activation from "./pages/activation/Activation";
import FindAccount from "./pages/find-account/FindAccount";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ChangePassword from "./pages/change-password/ChangePassword";

function App() {
  
  return (
    <div>
      <ToastContainer
        style={{zIndex:"9999999"}}
        position="bottom-left"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activation/:type" element={<Activation />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;
