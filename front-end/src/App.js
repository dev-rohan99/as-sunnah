import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Activation from "./pages/activation/Activation";

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
        <Route path="/activation" element={<Activation />} />
      </Routes>
    </div>
  );
}

export default App;
