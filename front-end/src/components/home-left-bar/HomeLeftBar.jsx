import React from 'react';
import { AiFillNotification, AiFillShop } from 'react-icons/ai';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { FcCustomerSupport, FcManager } from 'react-icons/fc';
import { GiHealthNormal } from 'react-icons/gi';
import { HiUserGroup, HiUsers } from 'react-icons/hi';
import { MdBloodtype, MdMessage, MdPayments } from 'react-icons/md';
import { RiBankCardFill, RiGamepadFill, RiPagesFill, RiVideoFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/Avatar';

const HomeLeftBar = () => {

    const { user } = useSelector((state) => state.auth);

  return (
    
    <div className="leftListBar z-10 sticky top-0 w-[320px] h-[100vh] overflow-hidden overflow-y-scroll">
        <ul className="ml-3 mt-[4.5rem]">
            <li><Link className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md" to="/profile"><Avatar/> <h6 className="font-[600] ml-3 text-[#383838] text-[17px]">{user.firstName} {user.surName}</h6></Link></li>

            <li><a className="iconMenuleftList" href="/"><HiUsers className="listIcon"/> <h6 className="listText">Friends</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><RiPagesFill className="listIcon2"/> <h6 className="listText">Pages</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><RiBankCardFill className="listIcon"/> <h6 className="listText">Feeds</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><HiUserGroup className="listIcon2"/> <h6 className="listText">Groups</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><AiFillShop className="listIcon"/> <h6 className="listText">Marketplace</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><RiVideoFill className="listIcon2"/> <h6 className="listText">Watch</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><AiFillNotification className="listIcon"/> <h6 className="listText">Add center</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><FcManager className="listIcon2"/> <h6 className="listText">Add manager</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><MdBloodtype className="listIcon text-[#DE2E4C]"/> <h6 className="listText">Blood donation</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><FcCustomerSupport className="listIcon2"/> <h6 className="listText">COVID-19 Information Centre</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><BsFillCalendar2EventFill className="listIcon"/> <h6 className="listText">Events</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><GiHealthNormal className="listIcon2"/> <h6 className="listText">Emotional Health</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><MdPayments className="listIcon"/> <h6 className="listText">asSunnah pay</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><MdMessage className="listIcon2"/> <h6 className="listText">Messages</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><MdMessage className="listIcon"/> <h6 className="listText">Messages kids</h6></a></li>
            <li><a className="iconMenuleftList" href="/"><RiGamepadFill className="listIcon2"/> <h6 className="listText">Play games</h6></a></li>

        </ul>

        <div className="border-b-[4px] border-[#c7c7c7]"></div>

        <h5 className="text-[17px] text-[#383838] p-3 pl-[20px] font-bold">Your shortcuts</h5>

        <ul className="ml-3 mb-3">
            <li><a className="flex p-2 items-center justify-start hover:bg-[#E4E6E8] rounded-l-md" href="/"><img src={`https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/252243699_3376258642499475_5877877376160028041_n.png?stp=c19.0.50.50a_cp0_dst-png_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=3aazABBkZN4AX93Vopx&_nc_oc=AQl0CYQXaMWzuiFu4Ocd0z3kOqv-n12YvZzdGvriF2ekVokQFwwR1Is4WlQLi2W9xUk&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCYKenhy9NR6ei2f1uUm4yH5QC0dSn2Cqbj8M5eHmsyRw&oe=63B7439D`} className="h-[40px] rounded-[10px] w-[40px] object-cover"/> <h6 className="font-[600] ml-3 text-[#383838] text-[17px]">Shorobindu Academy</h6></a></li>
        </ul>
    </div>

  )
}

export default HomeLeftBar;
