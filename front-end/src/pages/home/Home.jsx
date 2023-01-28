import React from 'react';
import HeaderOne from '../../components/header-one/HeaderOne';
import { useSelector } from 'react-redux';
import LoginTwo from '../login/LoginTwo';
import HomeLeftBar from '../../components/home-left-bar/HomeLeftBar';
import HomeRightBar from '../../components/home-right-bar/HomeRightBar';
import HomePost from '../../components/home-post/HomePost';

const Home = () => {

  const { loginState } = useSelector((state) => state.auth);

  return (

    <>

      {
        loginState ? 
        (<>
          
            <HeaderOne/>
      
            <div className="mainContainer bg-[#F0F2F5]">
              <div className="flex justify-between">
                
                <HomeLeftBar/>
      
                <HomePost/>
      
                <HomeRightBar/>
      
              </div>
            </div>
      
        </>) : <LoginTwo/>
      }

    </>
    
  )
}

export default Home;
