import React, { useState } from 'react';
import { BsFillEmojiAngryFill, BsFillEmojiLaughingFill, BsShareFill, BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Avatar from '../avatar/Avatar';
import { AiFillHeart, AiTwotoneLike } from 'react-icons/ai';
import { MdPhotoCamera, MdSend } from 'react-icons/md';
import { FaCommentDots, FaShare } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RiEmotionSadFill } from 'react-icons/ri';


const PostItem = ({postImage, postDesc, posterName}) => {

  const {user} = useSelector(state => state.auth);
  const [reactShow, setReactShow] = useState(false);

  const handleReactShow = (event) => {
    setReactShow(true);
  }

  const handleReactHide = (event) => {
    setReactShow(false);
  }

  return (
    <>
      
      <div className="w-[555px] p-3 mb-4 bg-[#ffffff] shadow-md rounded-md">
        <div className="flex justify-between items-center">

          <div className="flex justify-start items-center">
            <Avatar/>
            <div className="w-[250px] flex flex-col">
              <a href="/" className="ml-3 font-semibold text-[14px] text-[#2b2b2b]">{posterName}</a>
              <a href="/" className="ml-3 font-normal text-[14px] mt-[-3px] text-[#2b2b2b]">1h ago</a>
            </div>
          </div>

          <div className="w-[80px] flex justify-end">
            <a href="/" className="w-[30px] h-[30px] rounded-full text-[#2b2b2b] flex justify-center items-center hover:bg-[#c9c9c9] mr-2">
              <BsThreeDots className="w-[20px] h-[20px]"/>
            </a>
            <a href="/" className="w-[30px] h-[30px] rounded-full text-[#2b2b2b] flex justify-center items-center hover:bg-[#c9c9c9]">
              <RxCross1 className="w-[20px] h-[20px]"/>
            </a>
          </div>

        </div>

        <p className="mt-3 mb-3 text-[14px] text-[#2b2b2b]">{postDesc}</p>

        <img src={postImage} alt="" />

        <div className="flex justify-between items-center mt-3">

          <a onMouseEnter={handleReactShow} onMouseLeave={handleReactHide} href="/" className="rounded-md relative font-bold block text-[#444444] duration-300 hover:text-[#D82E38] hover:bg-[#E6A1A7]">
            <div className="w-[160px] py-2 flex justify-center items-center"><AiTwotoneLike className="text-2xl mr-1"/> Like</div>

            {reactShow && <ul className="absolute animate-bounce duration-500 flex justify-start items-center top-[-40px] py-2 left-0 cursor-default">
              <a href="/" className="w-[45px] h-[45px] ml-0 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><AiTwotoneLike className="w-[30px] h-[30px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><AiFillHeart className="w-[30px] h-[30px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><BsFillEmojiLaughingFill className="w-[25px] h-[25px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><RiEmotionSadFill className="w-[30px] h-[30px]"/></a>

              <a href="/" className="w-[45px] h-[45px] ml-3 bg-[#D82E38] text-[#fff] rounded-full flex items-center justify-center"><BsFillEmojiAngryFill className="w-[25px] h-[25px]"/></a>
            </ul>}
          </a>

          <label htmlFor="comments" href="/" className="rounded-md duration-300 font-bold block text-[#444444] hover:text-[#D82E38] hover:bg-[#E6A1A7]">
            <div className="w-[160px] py-2 flex justify-center items-center"><FaCommentDots className="text-2xl mr-1"/> Comment</div>
          </label>

          <a href="/" className="rounded-md duration-300 font-bold block text-[#444444] hover:text-[#D82E38] hover:bg-[#E6A1A7]">
            <div className="w-[160px] py-2 flex justify-center items-center"><FaShare className="text-2xl mr-1"/> Share</div>
          </a>

        </div>

        <div className="flex justify-between items-center mt-3">

          <a href="/" className="w-[35px] h-[35px] rounded-full overflow-hidden flex justify-start items-center"><img className="object-cover" src={user.avatar ? `/profile-photo/${user.avatar}` : "https://cdn-icons-png.flaticon.com/512/219/219988.png"} alt="" /></a>
          <div className="w-[90%] relative">
            <input id="comments" placeholder="Write a comment..." type="text" className="w-[100%] h-[35px] px-4 flex rounded-lg items-center bg-[#ddd] outline-none" />
            <div className="flex items-center absolute right-0 top-[6px]">
              <MdPhotoCamera className="text-2xl mr-2 text-[#D82E38]"/>
              <MdSend className="text-2xl mr-2 text-[#D82E38]"/>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default PostItem;
