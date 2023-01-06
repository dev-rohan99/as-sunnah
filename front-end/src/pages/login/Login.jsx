import React from 'react';
import LoginField from '../../components/login/LoginField';

const Login = () => {

  return (
    <div>
      
        <div className="mainContainer bg-[#F0F2F5]">
          <div className="container h-[100vh] pt-[30px] pb-[30px] flex items-center justify-between">
            <div className="w-[548px] text-[#000] mt-[-60px]">
                <h1 className="text-[60px] text-[#D82E38] font-bold">asSunnah</h1>
                <p className="text-[30px] leading-[37px] font-[500]">asSunnah helps you connect and share with the people in your life.</p>
            </div>

            <LoginField/>
          </div>
        </div>

    </div>
  )
}

export default Login;
