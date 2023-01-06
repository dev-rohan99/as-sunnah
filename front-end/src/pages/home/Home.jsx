import React from 'react';
import logo from "../../assets/images/logo3.png";
import { GiHealthNormal } from "react-icons/gi";
import { BiSearchAlt2, BiHappyAlt } from "react-icons/bi";
import { BsGrid3X3GapFill, BsFillCalendar2EventFill, BsThreeDots } from "react-icons/bs";
import { FcManager, FcCustomerSupport } from "react-icons/fc";
import { AiOutlineHome, AiFillShop, AiFillNotification, AiFillVideoCamera } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineUserGroup, HiUsers, HiUserGroup, HiPhotograph } from "react-icons/hi";
import { RiVideoLine, RiBankCardLine, RiPagesFill, RiBankCardFill, RiVideoFill, RiGamepadFill, RiLiveFill } from "react-icons/ri";
import { MdMessage, MdCircleNotifications, MdBloodtype, MdPayments } from "react-icons/md";
import Post from '../../components/post/Post';

const Home = () => {

  return (
    <div>
      
      <div className="mainNavWrapper z-20 bg-[#ffffff] shadow-md fixed top-0 left-0 right-0">
        <div className="navContainer pr-[15px] pl-[15px] pt-[5px] pb-[5px] flex justify-between">
          
          <div className="w-[320px] flex items-center">
            <img className="w-[50px] h-[50px] object-cover" src={logo} alt="" />
            <input type="text" className="p-[5px] pl-[20px] outline-none h-[40px] ml-3 w-[250px] rounded-[20px] bg-[#F0F2F5]" placeholder="Search asSunnah" />
          </div>

          <div className="w-[555px] mx-auto">
              <ul className="flex items-center">
                <li><a className="iconMenuMiddle active" href="#"><AiOutlineHome className="h-[30px] w-[30px]"/></a></li>
                <li><a className="iconMenuMiddle" href="#"><HiOutlineUsers className="h-[30px] w-[30px]"/></a></li>
                <li><a className="iconMenuMiddle" href="#"><RiVideoLine className="h-[30px] w-[30px]"/></a></li>
                <li><a className="iconMenuMiddle" href="#"><HiOutlineUserGroup className="h-[30px] w-[30px]"/></a></li>
                <li><a className="iconMenuMiddle" href="#"><RiBankCardLine className="h-[30px] w-[30px]"/></a></li>
              </ul>
          </div>
          
          <div className="w-[320px] flex items-center justify-end">
            <ul className="flex items-center">
              <li><a className="iconMenuRight mr-2" href="#"><BsGrid3X3GapFill className="h-[20px] w-[20px]"/></a></li>
              <li><a className="iconMenuRight mr-2" href="#"><MdMessage className="h-[20px] w-[20px]"/></a></li>
              <li><a className="iconMenuRight mr-2" href="#"><MdCircleNotifications className="h-[20px] w-[20px]"/></a></li>
              <li><a className="" href="#"><img src={logo} className="h-[40px] rounded-full w-[40px] object-cover"/></a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="mainContainer bg-[#F0F2F5]">
        <div className="flex justify-between">
          
          <div className="leftListBar z-10 sticky top-0 w-[320px] h-[100vh] overflow-hidden overflow-y-scroll">
            <ul className="ml-3 mt-[4.5rem]">
              <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md" href="#"><img src={logo} className="h-[40px] rounded-full w-[40px] object-cover"/> <h6 className="font-[600] ml-3 text-[#383838] text-[17px]">Rohan Mostafa</h6></a></li>

              <li><a className="iconMenuleftList" href="#"><HiUsers className="listIcon"/> <h6 className="listText">Friends</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><RiPagesFill className="listIcon2"/> <h6 className="listText">Pages</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><RiBankCardFill className="listIcon"/> <h6 className="listText">Feeds</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><HiUserGroup className="listIcon2"/> <h6 className="listText">Groups</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><AiFillShop className="listIcon"/> <h6 className="listText">Marketplace</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><RiVideoFill className="listIcon2"/> <h6 className="listText">Watch</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><AiFillNotification className="listIcon"/> <h6 className="listText">Add center</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><FcManager className="listIcon2"/> <h6 className="listText">Add manager</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><MdBloodtype className="listIcon text-[#DE2E4C]"/> <h6 className="listText">Blood donation</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><FcCustomerSupport className="listIcon2"/> <h6 className="listText">COVID-19 Information Centre</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><BsFillCalendar2EventFill className="listIcon"/> <h6 className="listText">Events</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><GiHealthNormal className="listIcon2"/> <h6 className="listText">Emotional Health</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><MdPayments className="listIcon"/> <h6 className="listText">asSunnah pay</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><MdMessage className="listIcon2"/> <h6 className="listText">Messages</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><MdMessage className="listIcon"/> <h6 className="listText">Messages kids</h6></a></li>
              <li><a className="iconMenuleftList" href="#"><RiGamepadFill className="listIcon2"/> <h6 className="listText">Play games</h6></a></li>

            </ul>

            <div className="border-b-[4px] border-[#c7c7c7]"></div>

            <h5 className="text-[17px] text-[#383838] p-3 pl-[20px] font-bold">Your shortcuts</h5>

            <ul className="ml-3 mb-3">
              <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md" href="#"><img src={`https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/252243699_3376258642499475_5877877376160028041_n.png?stp=c19.0.50.50a_cp0_dst-png_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=3aazABBkZN4AX93Vopx&_nc_oc=AQl0CYQXaMWzuiFu4Ocd0z3kOqv-n12YvZzdGvriF2ekVokQFwwR1Is4WlQLi2W9xUk&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCYKenhy9NR6ei2f1uUm4yH5QC0dSn2Cqbj8M5eHmsyRw&oe=63B7439D`} className="h-[40px] rounded-[10px] w-[40px] object-cover"/> <h6 className="font-[600] ml-3 text-[#383838] text-[17px]">Shorobindu Academy</h6></a></li>
            </ul>
          </div>

          <div className="postSection z-10 w-[555px]">
            
            <div className="mt-[5.5rem] flex justify-start">

              <div className="storyWrapper">
                <h6 className="z-10 absolute left-3 top-3 text-[#ffffff] text-[12px] font-semibold">Ashraful</h6>
                <img src={logo} className="h-[40px] rounded-full w-[40px] z-10 object-cover absolute left-3 bottom-3 border-[3px] border-[#D82E38]"/>
                <img src={`https://img.freepik.com/free-vector/arab-man-cartoon-character_1308-46539.jpg?w=360`} className="h-[100%] w-[100%] object-cover"/>
              </div>

              <div className="storyWrapper">
                <h6 className="z-10 absolute left-3 top-3 text-[#ffffff] text-[12px] font-semibold">Ashraful</h6>
                <img src={logo} className="h-[40px] rounded-full w-[40px] z-10 object-cover absolute left-3 bottom-3 border-[3px] border-[#D82E38]"/>
                <img src={`https://img.freepik.com/free-vector/arab-man-cartoon-character_1308-46539.jpg?w=360`} className="h-[100%] w-[100%] object-cover"/>
              </div>

              <div className="storyWrapper">
                <h6 className="z-10 absolute left-3 top-3 text-[#ffffff] text-[12px] font-semibold">Ashraful</h6>
                <img src={logo} className="h-[40px] rounded-full w-[40px] z-10 object-cover absolute left-3 bottom-3 border-[3px] border-[#D82E38]"/>
                <img src={`https://img.freepik.com/free-vector/arab-man-cartoon-character_1308-46539.jpg?w=360`} className="h-[100%] w-[100%] object-cover"/>
              </div>

              <div className="storyWrapper">
                <h6 className="z-10 absolute left-3 top-3 text-[#ffffff] text-[12px] font-semibold">Ashraful</h6>
                <img src={logo} className="h-[40px] rounded-full w-[40px] z-10 object-cover absolute left-3 bottom-3 border-[3px] border-[#D82E38]"/>
                <img src={`https://img.freepik.com/free-vector/arab-man-cartoon-character_1308-46539.jpg?w=360`} className="h-[100%] w-[100%] object-cover"/>
              </div>

              <div className="storyWrapper">
                <h6 className="z-10 absolute left-3 top-3 text-[#ffffff] text-[12px] font-semibold">Ashraful</h6>
                <img src={logo} className="h-[40px] rounded-full w-[40px] z-10 object-cover absolute left-3 bottom-3 border-[3px] border-[#D82E38]"/>
                <img src={`https://img.freepik.com/free-vector/arab-man-cartoon-character_1308-46539.jpg?w=360`} className="h-[100%] w-[100%] object-cover"/>
              </div>

            </div>
            
            <div className="p-3 mt-5 bg-[#ffffff] shadow-md rounded-md">
              <div className="flex justify-between items-center rounded-l-md pb-3">
                <img src={logo} className="h-[35px] rounded-full w-[35px] object-cover"/>
                <a href="/" className="p-[5px] flex items-center px-[20px] outline-none h-[40px] ml-3 w-[100%] rounded-[20px] font-semibold text-[#9b9b9b] bg-[#e7e7e7] hover:bg-[#d1d1d1]">What's on your mind?</a>
              </div>

              <hr />

              <div className="flex mt-3 justify-between">
                <a href="/" className="w-[180px] hover:bg-[#d82e394d] rounded-md font-semibold text-[#949494] h-[40px] flex items-center justify-center"><RiLiveFill className="h-[30px] w-[30px] text-[#D82E38] mr-2"/>Live video</a>

                <a href="/" className="w-[180px] hover:bg-[#d82e394d] rounded-md font-semibold text-[#949494] h-[40px] flex items-center justify-center"><HiPhotograph className="h-[30px] w-[30px] text-[#41B35D] mr-2"/>Photo/video</a>
                
                <a href="/" className="w-[180px] hover:bg-[#d82e394d] rounded-md font-semibold text-[#949494] h-[40px] flex items-center justify-center"><BiHappyAlt className="h-[30px] w-[30px] text-[#ffb508] mr-2"/>Felling/activity</a>
              </div>
            </div>
            
            <Post profile={logo} postDesc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis ipsam repellendus voluptatibus quibusdam impedit, explicabo expedita? Ipsa ipsum iste consequatur animi itaque perferendis unde adipisci quod, esse, voluptate totam!`} postImage="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg"/>

          </div>

          <div className="rightListBar z-10 sticky top-0 w-[320px] h-[100vh] overflow-hidden overflow-y-scroll">
            
            <div className="mr-3 mt-[5.5rem] flex justify-between items-center">
              <h5 className="font-bold text-[#383838]">Contacts</h5>

              <div className="flex justify-end">
                <a href="#" className="contactIcon"><AiFillVideoCamera className="w-[15px] h-[15px]"/></a>
                <a href="#" className="contactIcon"><BiSearchAlt2 className="w-[15px] h-[15px]"/></a>
                <a href="#" className="contactIcon"><BsThreeDots className="w-[15px] h-[15px]"/></a>
              </div>
            </div>

            <ul className="mt-2 pb-2 mb-3 border-b-[3px] border-[#d1d1d1]">
              <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md mb-3" href="#"><img src={logo} className="h-[30px] rounded-full w-[30px] object-cover"/> <h6 className="font-semibold ml-3 text-[#383838] text-[16px]">Ashraful Haque</h6></a></li>
            </ul>

            <h5 className="font-bold text-[#383838]">Group Conversations</h5>

            <ul className="mt-2 mb-3">
              <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md mb-3" href="#"><img src={logo} className="h-[30px] rounded-full w-[30px] object-cover"/> <h6 className="font-semibold ml-3 text-[#383838] text-[16px]">Developers</h6></a></li>
            </ul>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home;
