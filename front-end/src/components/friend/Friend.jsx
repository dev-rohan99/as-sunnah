import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelFriendRequstAction, confirmFriendRequstAction, friendRequstSenderAction } from '../../redux/auth/action.js';

const Friend = ({user, buttonState}) => {

  const {user : requesterId} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [showCancelReq, setShowCancelReq] = useState(false);


  const handleSendFriendRequest = (receiverId) => {
    dispatch(friendRequstSenderAction(requesterId._id, receiverId));
    setShowCancelReq(true);
  }

  const handleCancelRequest = (receiverId) => {
    dispatch(cancelFriendRequstAction(requesterId._id, receiverId));
    setShowCancelReq(false);
  }

  const handleConfirmFriendRequest = (receiverId) => {
    dispatch(confirmFriendRequstAction(receiverId, requesterId._id));
  }


    
  if(user){

    return (
        <>
        
            <div className="w-[210px] rounded-md shadow-lg bg-[#fff] p-2">
                <img className="w-[100%] h-[200px] object-cover rounded-md" src={user.avatar ? `/profile-photo/${user.avatar}` : "https://cdn-icons-png.flaticon.com/512/219/219988.png"} alt="friendImg" />
                <div className="">
                    <h4 className="font-[600] text-[#383838] text-[17px] mt-3 leading-tight truncate">{user.firstName} {user.surName}</h4>

                    <div className="flex justify-start items-center mt-1 mb-1">
                        <img className="w-[20px] h-[20px] border-[1px] border-[#fff] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                        <img className="w-[20px] h-[20px] border-[1px] border-[#fff] rounded-full object-cover ml-[-4px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                        <span className="font-normal text-[gray] text-[14px] ml-2">4 mutual friends</span>
                    </div>

                    {
                        buttonState === "friendrequest" && 
                        <>
                            <button onClick={() => handleConfirmFriendRequest(user._id)} className="px-5 w-[100%] outline-none block py-2 font-semibold rounded-md text-[#fff] bg-[#D82E38] text-center text-[15px] mt-2">Confirm</button>
                            <a href="/" className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#444444] text-center text-[15px] mt-2">Delete</a>
                        </>
                    }

                    {
                        buttonState === "mayknow" && 
                        <>
                            {showCancelReq && <a href="/" onClick={() => handleCancelRequest(user._id)} className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#D82E38] text-center text-[15px] mt-2">Cancel request</a>}

                            {!showCancelReq && <button onClick={() => handleSendFriendRequest(user._id)} className="px-5 w-[100%] block py-2 font-semibold outline-none rounded-md text-[#fff] bg-[#D82E38] text-center text-[15px] mt-2">Add friend</button>}
                            <a href="/" className="px-5 w-[100%] block py-2 font-semibold rounded-md text-[#fff] bg-[#444444] text-center text-[15px] mt-2">Remove</a>                   
                        </>
                    }
                </div>
            </div>
        
        </>
    )

  }
}

export default Friend;
