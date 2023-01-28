import React, { useRef, useState } from 'react';
import logo from "../../assets/images/logo3.png";
import { AiFillHeart, AiFillSetting, AiTwotoneLike } from 'react-icons/ai';
import { BsFillEmojiAngryFill, BsFillEmojiLaughingFill, BsGrid3X3GapFill, BsThreeDots } from 'react-icons/bs';
import { MdCircleNotifications, MdDarkMode, MdFeedback, MdLiveHelp, MdMessage } from 'react-icons/md';
import { RiEmotionSadFill, RiLogoutBoxRFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import usePopupClose from '../../hooks/usePopupClose';
import { userLogout } from '../../redux/auth/action';
import Avatar from '../avatar/Avatar';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';


const FullScreenStoryPopup = ({setFeatured}) => {

  const { user } = useSelector((state) => state.auth);
  const [userMenu, setUserMenu] = useState(false);
  const dispatch = useDispatch();

  const userDropdown = useRef(null);
    
  usePopupClose(userDropdown, setUserMenu);

  const handleUserMenu = (event) => {
      event.preventDefault();
      setUserMenu(!userMenu);
  }

  const handleLogout = (event) => {
      event.preventDefault();
      dispatch(userLogout());
  }

  const handleClosePopup = (event) => {
    event.preventDefault();
    setFeatured(false);
  }

  return (
    <>
    
        <div className="w-[100%] z-[100] bg-[#111111] h-[100vh] fixed left-0 bottom-0 right-0 top-0">
          <div className="w-[100%] h-[100vh]">

            <div className="mainNavWrapper z-50 bg-[#ffffff00] fixed top-0 left-0 right-0">
              <div className="navContainer pr-[15px] pl-[15px] pt-[5px] pb-[5px] flex justify-between">
              
              <div className="w-[320px] flex items-center justify-start">
                  <a onClick={handleClosePopup} href="/" className="w-[45px] h-[45px] rounded-full text-[#ffffff] flex justify-center items-center hover:bg-[#d82e394b] mr-3">
                      <RxCross1 className="w-[30px] h-[30px]"/>
                  </a>
                  <img className="w-[50px] h-[50px] object-cover" src={logo} alt="" />
              </div>

              
              <div className="w-[320px] flex items-center justify-end">
                  <ul className="flex items-center">
                      <li><a className="iconMenuRight mr-2" href="#"><BsGrid3X3GapFill className="h-[20px] w-[20px]"/></a></li>
                      <li><a className="iconMenuRight mr-2" href="#"><MdMessage className="h-[20px] w-[20px]"/></a></li>
                      <li><a className="iconMenuRight mr-2" href="#"><MdCircleNotifications className="h-[20px] w-[20px]"/></a></li>
                      <li className="relative">
                          <a className="" href="/" onClick={handleUserMenu}>
                              <Avatar />
                          </a>

                          {
                              userMenu && <ul ref={userDropdown} className="w-[330px] shadow-lg rounded-md border-t-[5px] border-[#D82E38] rounded-t-none bg-[#F3C0C3] p-3 absolute right-0 top-[53px]">
                              <li><Link className="flex p-2 mb-3 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md" to="/profile"><Avatar /> <h6 className="font-[600] ml-3 text-[#383838] text-[17px]">{user.firstName} {user.surName}</h6></Link></li>

                              <li><a className="iconMenuleftList" href="#"><AiFillSetting className="listIcon h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Setting & Privacy</h6></a></li>
                              <li><a className="iconMenuleftList" href="#"><MdLiveHelp className="listIcon2 h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Support & Help</h6></a></li>
                              <li><a className="iconMenuleftList" href="#"><MdDarkMode className="listIcon h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Display</h6></a></li>
                              <li><a className="iconMenuleftList" href="#"><MdFeedback className="listIcon2 h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Feedback</h6></a></li>
                              <li><a onClick={handleLogout} className="iconMenuleftList" href="/"><RiLogoutBoxRFill className="listIcon2 h-[30px] w-[30px] text-[#2b2b2b]"/> <h6 className="listText">Log out</h6></a></li>
                          </ul>
                          }
                      </li>
                  </ul>
              </div>

              </div>
            </div>

            <div className="w-[100%] flex justify-center items-end h-[630px]">
              <div className="w-[370px] rounded-lg bg-[#202020] h-[590px]">

              </div>
            </div>

            <div className="w-[100%] flex justify-center items-center mt-5">
              <input type="text" className="px-[20px] pl-[20px] py-[10px] text-[#fff] outline-none ml-3 w-[300px] rounded-[20px] bg-[#202020]" placeholder="Reply..." />
              
              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><AiTwotoneLike className="w-[30px] h-[30px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><AiFillHeart className="w-[30px] h-[30px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><BsFillEmojiLaughingFill className="w-[25px] h-[25px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><RiEmotionSadFill className="w-[30px] h-[30px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><BsFillEmojiAngryFill className="w-[25px] h-[25px]"/></a>
            </div>

          </div>
        </div>

    </>
  )
}

export default FullScreenStoryPopup;
