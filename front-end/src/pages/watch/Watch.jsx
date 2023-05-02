import React from 'react';
import { AiFillSetting, AiFillVideoCamera } from 'react-icons/ai';
import { BsFillBookmarkCheckFill, BsFillCollectionPlayFill } from 'react-icons/bs';
import { FcClapperboard } from 'react-icons/fc';
import { MdLiveTv } from 'react-icons/md';
import { RiLiveFill } from 'react-icons/ri';
import HeaderOne from '../../components/header-one/HeaderOne';


const Watch = () => {


  return (
    <>
    
        <HeaderOne/>

        <div className="pt-[100px] pb-[60px]">
            <div className="relative">
                <div className="w-[20%] fixed left-0 top-0 bottom-0 h-[100vh] bg-[#fff] shadow-lg p-2">

                    <div className="pt-[5rem] flex items-center justify-between">
                        <h4 className="font-[600] text-[#383838] text-[25px]">Watch</h4>
                        <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center hover:bg-[#c9c9c9] bg-[#ddd]">
                            <AiFillSetting className="w-[25px] h-[25px]"/>
                        </a>
                    </div>

                    <ul className="mt-4">
                        <li><a className="iconMenuleftList2" href="/"><BsFillCollectionPlayFill className="listIcon h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Home</h6></a></li>
                        <li><a className="iconMenuleftList2" href="/"><RiLiveFill className="listIcon h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Live</h6></a></li>
                        <li><a className="iconMenuleftList2" href="/"><FcClapperboard className="listIcon2 h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Shows</h6></a></li>
                        <li><a className="iconMenuleftList2" href="/"><BsFillBookmarkCheckFill className="listIcon h-[25px] w-[25px] text-[#2b2b2b]"/> <h6 className="listText">Saved Videos</h6></a></li>
                    </ul>
                </div>

                <div className="w-[77%] ml-auto pr-5">

                </div>
            </div>
        </div>
    
    </>
  )
}

export default Watch;
