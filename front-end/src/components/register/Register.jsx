import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { RiErrorWarningFill } from "react-icons/ri";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import createToast from '../../utility/toast.js';
import { userRegister } from '../../redux/auth/action.js';

const Register = ({setRegister}) => {

  const Navigate = useNavigate();

  let date = new Date();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [input, setInput] = useState({
    fname : "",
    sname : "",
    phoneOrEmail : "",
    password : "",
    day : date.getDate(),
    month : months[date.getMonth()],
    year : date.getFullYear(),
    gender : ""
  });

  const [validate, setValidate] = useState({
    fname : false,
    sname : false,
    phoneOrEmail : false,
    password : false
  });

  const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  

  const years = Array.from(
    {length : 150},
    (_, i) => new Date().getFullYear() - i
  );

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name] : event.target.value
    }));
  }

  const handleInputValidate = (event) => {

    let field = event.target.name;
    
    if(!input[field]){
      setValidate((prevState) => ({
        ...prevState,
        [field] : true
      }));
    }else{
      setValidate((prevState) => ({
        ...prevState,
        [field] : false
      }));
    }

  }

  const handleUserRegister = (event) => {

    event.preventDefault();

    if(!input.fname || !input.sname || !input.phoneOrEmail || !input.password || !input.day || !input.month || !input.year || !input.gender){
      createToast("All fields are required!", "warn")
    }else{

      dispatch(userRegister({
        firstName : input.fname,
        surName : input.sname,
        phoneOrEmail : input.phoneOrEmail,
        password : input.password,
        birthDate : input.day,
        birthMonth : input.month,
        birthYear : input.year,
        gender : input.gender
      }, setRegister, setInput, event, Navigate));

    }

  }

    
  return (
    <div>
      
      <div className="relative">
        <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#ffffffa1] fixed left-0 right-0 top-0 text-[#2b2b2b]">
          <div className="w-[550px] rounded-lg bg-[#ffffff] shadow-xl p-4 pt-5 pb-6">
            <div className="flex justify-between">
              <div className="">
                <h2 className="text-[33px] font-bold">Sign Up</h2>
                <p className="text-[14px] font-normal">It's quick and easy.</p>
              </div>

              <a onClick={(e) => {e.preventDefault(); setRegister(false);}} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#ccc]">
                <RxCross1 className="h-[20px] w-[20px]"/>
              </a>
            </div>

            <div className="border-t-[3px] mt-3 border-[#DDDFE2]">

              <form onSubmit={handleUserRegister}>

                <div className="mt-3 flex justify-between">
                  <div className="relative w-[100%] mr-3">
                    <input name="fname" type="text" placeholder="First name" className="w-[100%] p-[0.6rem] outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]" value={input.fname} onBlur={handleInputValidate} onChange={handleInputChange} />

                    {validate.fname && <RiErrorWarningFill className="w-[20px] h-[20px] absolute right-3 top-3 text-[#D82E38]"/>}
                  </div>

                  <div className="relative w-[100%]">
                    <input name="sname" type="text" placeholder="Sur name" className="w-[100%] p-[0.6rem] outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]" value={input.sname} onBlur={handleInputValidate} onChange={handleInputChange} />

                    {validate.sname && <RiErrorWarningFill className="w-[20px] h-[20px] absolute right-3 top-3 text-[#D82E38]"/>}
                  </div>
                </div>

                <div className="mt-3 relative w-[100%]">
                  <input name="phoneOrEmail" type="text" placeholder="Mobile number or e-mail address" className="w-[100%] p-[0.6rem] outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]" value={input.phoneOrEmail} onBlur={handleInputValidate} onChange={handleInputChange} />

                  {validate.phoneOrEmail && <RiErrorWarningFill className="w-[20px] h-[20px] absolute right-3 top-3 text-[#D82E38]"/>}
                </div>

                <div className="mt-3 relative w-[100%]">
                  <input name="password" type="password" placeholder="Password" className="w-[100%] p-[0.6rem] outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]" value={input.password} onBlur={handleInputValidate} onChange={handleInputChange} />

                  {validate.password && <RiErrorWarningFill className="w-[20px] h-[20px] absolute right-3 top-3 text-[#D82E38]"/>}
                </div>

                <p className="mt-3 font-semibold text-[14px]">Date of birth</p>
                <div className="flex justify-between">

                  <div className="mr-3">
                    <select onChange={handleInputChange} name="day" className="w-[165px] p-3 outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]">
                      {
                        days.map((data, index) => 
                        
                          <option selected={ data === input.day ? true : false } value={data} key={index + 1}>{data}</option>
                        
                        )
                      }
                    </select>
                  </div>

                  <div className="mr-3">
                    <select onChange={handleInputChange} name="month" className="w-[165px] p-3 outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]">
                      {
                        months.map((data, index) => 

                          <option selected={ data === input.month ? true : false } value={data} key={index + 1}>{data}</option>
                        
                        )
                      }
                    </select>
                  </div>

                  <div className="">
                    <select onChange={handleInputChange} name="year" className="w-[165px] p-3 outline-none border-[1px] rounded-md border-[#DDDFE2] focus:border-[1px] focus:border-[#D82E38]">
                      {
                        years.map((data, index) => 

                          <option selected={ data === input.year ? true : false } value={data} key={index + 1}>{data}</option>
                        
                        )
                      }
                    </select>
                  </div>

                </div>

                <p className="mt-3 font-semibold text-[14px]">Gender</p>
                <div className="flex justify-between">

                  <div className="w-[165px] p-3 flex items-center outline-none border-[1px] rounded-md border-[#DDDFE2]">
                    <input onChange={handleInputChange} value="male" className="w-[20%]" name="gender" type="radio" id="male" />
                    <label className="w-[80%] font-semibold text-[#2b2b2b]" htmlFor="male">Male</label>
                  </div>

                  <div className="w-[165px] p-3 flex items-center outline-none border-[1px] rounded-md border-[#DDDFE2]">
                    <input onChange={handleInputChange} value="female" className="w-[20%]" name="gender" type="radio" id="female" />
                    <label className="w-[80%] font-semibold text-[#2b2b2b]" htmlFor="female">Female</label>
                  </div>

                  <div className="w-[165px] p-3 flex items-center outline-none border-[1px] rounded-md border-[#DDDFE2]">
                    <input onChange={handleInputChange} value="other" className="w-[20%]" name="gender" type="radio" id="other" />
                    <label className="w-[80%] font-semibold text-[#2b2b2b]" htmlFor="other">Other</label>
                  </div>

                </div>

                <button type="submit" className="p-[0.4rem] outline-none w-[100%] text-[22px] text-[#ffffff] font-bold  bg-[#3cc222] hover:bg-[#36A420] rounded-md mt-4">Sign up</button>

              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register;
