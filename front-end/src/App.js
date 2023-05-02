import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";  
import { ToastContainer } from 'react-toastify';
import LoadingBar from "react-top-loading-bar";
import 'react-toastify/dist/ReactToastify.css';
import Activation from "./pages/activation/Activation";
import FindAccount from "./pages/find-account/FindAccount";
import ChangePassword from "./pages/change-password/ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_END } from "./redux/loader/loaderType.js";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { accessLoggedInUser } from "./redux/auth/action.js"; 
import LoggedInUser from "./middlewares/LoggedInUser";
import LoggedOutUser from "./middlewares/LoggedOutUser";
import Watch from "./pages/watch/Watch";
import Home from "./pages/home/Home";
import Friends from "./pages/friends/Friends";
import AboutProfile from "./pages/about-profile/AboutProfile";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";

function App() {

  const loader = useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();
  const userAccessDispatch = useDispatch();
  const token = Cookies.get("authToken");
  
  useEffect(() => {

    if(token){
      userAccessDispatch(accessLoggedInUser(token));
    }

  }, [userAccessDispatch, token]);
  
  if(token){
    return (
      <>
  
        <LoadingBar color='#D82E38' progress={loader} onLoaderFinished={() => loaderDispatch({type : LOADER_END})} />
        
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
          <Route path="/" element={<LoggedInUser/>}>
            <Route path="/friends" element={<Friends />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/about-profile" element={<AboutProfile />} />
          </Route>
  
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/activation/:type" element={<Activation />} />
          
        </Routes>
      </>
    );
  }else{
    return (
      <>
  
        <LoadingBar color='#D82E38' progress={loader} onLoaderFinished={() => loaderDispatch({type : LOADER_END})} />
        
        <ToastContainer
          style={{zIndex:"9999999"}}
          position="bottom-left"
          autoClose={3000}
          newestOnTop={true}
          closeOnClick
        />
  
        <Routes>
          
          <Route path="/" element={<Home />} />
  
          <Route element={<LoggedOutUser/>}>
            <Route path="/login" element={<Login />} />
          </Route>
  
          <Route path="/find-account" element={<FindAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/activation/:type" element={<Activation />} />
          
        </Routes>
      </>
    );
  }
}

export default App;
