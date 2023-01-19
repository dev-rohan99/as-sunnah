import React from 'react';
import { useSelector } from "react-redux";


const Avatar = () => {

    const { user } = useSelector((state) => state.auth);

  return (
    <div>
        
        <img 
        src={user.avatar ? user.avatar : 'https://cdn-icons-png.flaticon.com/512/219/219988.png' } 
        alt="user" 
        className="h-[40px] rounded-full w-[40px] object-cover"
        />

    </div>
  )
}

export default Avatar;
