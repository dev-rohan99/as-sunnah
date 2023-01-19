import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/auth/action";
import createToast from "../../utility/toast";
import Register from "../register/Register";

const LoginField = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const [input, setInput] = useState({
    phoneOrEmail : "",
    password : ""
  });

  const handleInputChange = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name] : event.target.value
    }));
  }

  const handleLoginForm = (event) => {

    event.preventDefault();

    if(!input.phoneOrEmail || !input.password){
      createToast("All fields are required!", "warn");
    }else{

      dispatch(userLogin({
        phoneOrEmail : input.phoneOrEmail,
        password : input.password
      }, navigate));

    }

  }


  return (
    <div>
        
        <div className="loginFormWrapper bg-[#ffffff] rounded-md shadow-lg p-4 w-[396px]">

            <form onSubmit={handleLoginForm}>
              <input name="phoneOrEmail" value={input.phoneOrEmail} onChange={handleInputChange} type="text" placeholder="Email address or phone number" className="w-[100%] p-3 outline-none border-[1px] rounded-md mb-[10px] border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]" />

              <input name="password" value={input.password} onChange={handleInputChange} type="password" placeholder="Password" className="w-[100%] p-3 outline-none border-[1px] rounded-md mb-[15px] border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]" />

              <button type="submit" className="p-2 outline-none w-[100%] text-[22px] text-[#ffffff] font-bold  bg-[#D82E38] hover:bg-[#e72c39] rounded-md">Log in</button>
            </form>

            <div className="text-center border-b-[2px] border-[#DDDFE2]">
              <Link to={'/find-account'} className="text-[14px] text-[#D82E38] mt-4 mb-4 block hover:underline">Forgotten password?</Link>
            </div>

            <div className="text-center">
              <button onClick={() => {setRegister(true)}} className="p-2 pl-5 mt-6 mb-2 pr-5 outline-none text-[19px] text-[#ffffff] font-bold  bg-[#3cc222] hover:bg-[#36A420] rounded-md">Create new account</button>
            </div>

        </div>

        <div className="w-[396px]">
          <p className="text-center mt-5"><a className="font-bold hover:underline" href="#">Create a Page</a> for a celebrity, brand or business.</p>
        </div>

        {register && <Register setRegister={() => setRegister(false)}/>}

    </div>
  )
}

export default LoginField;
