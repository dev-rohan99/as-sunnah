import React from 'react';
import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { MdHomeWork, MdLocationOn, MdWork } from 'react-icons/md';
import { RiTimeFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileUpdate } from '../../redux/auth/action';
import FeaturedPopup from '../modals/FeaturedPopup';
import FullScreenStoryPopup from '../modals/FullScreenStoryPopup';
import ProfileDetailsModal from '../modals/ProfileDetailsModal';
// import { MongoClient } from "MongoClient";


const ProfileIntro = () => {

    const {user} = useSelector((state) => state.auth);
    const [detailsModal, setDetailsModal] = useState(false);
    const [showBio, setShowBio] = useState(false);
    const [bio, setBio] = useState(user.bio ? user.bio : "");
    const [remain, setRemain] = useState(101 - bio.length);
    const [saveBtn, setSaveBtn] = useState(false);
    const [featured, setFeatured] = useState(false);
    const [featuredPopup, setFeaturedPopup] = useState(false);
    const dispatch = useDispatch();

    // const client = new MongoClient("mongodb://localhost/facebook", {});
    // client.connect();
    // const db = client.db("facebook");
    // const collection = db.collection('users');
    // const result = collection.findOne({ id: user._id });
    // console.log(result);

    const handleShowFeatured = () => {
        setFeatured(!featured);
    }

    const handleBioChange = (event) => {
        setBio(event.target.value);
        setRemain(101 - event.target.value.length);
        setSaveBtn(true);
        if(remain <= 0){
            setSaveBtn(false);
        }
    }

    const handleBioShow = (event) => {
        event.preventDefault();
        setShowBio(!showBio);
    }

    const handleBioUpdate = (event) => {
        event.preventDefault();
        dispatch(userProfileUpdate(user._id, {bio}, setShowBio));
    }

    const handleDetailsModal = (event) => {
        event.preventDefault();
        setDetailsModal(true);
    }

    const handleFeaturedPopupShow = (event) => {
        event.preventDefault();
        setFeaturedPopup(true);
    }



  return (
    <>

        {
            featured && <FullScreenStoryPopup setFeatured={setFeatured}/>
        }

        <div className="w-[440px]">
            <div className="mb-3 p-4 mt-5 bg-[#ffffff] shadow-md rounded-md">
                <h3 className="font-semibold text-[20px]">Intro</h3>

                {
                    showBio && <div>
                        <textarea name="bio" onChange={handleBioChange} value={bio} className="w-[100%] p-2 bg-[#ddd] border-[2px] border-[#444444] rounded-md outline-none focus:border-[2px] focus:border-[#D82E38] resize-none mt-3 text-center" placeholder="Add your bio" rows="3"></textarea>
                        <p className="text-[gray] text-[13px] text-right">{remain} characters remaining</p>
                        <div className="flex justify-end">
                            <a href="/" onClick={handleBioShow} className="mt-[7px] px-4 py-2 font-semibold text-[#ffffff] active:bg-[#D82E38] rounded-md bg-[#444444]">Cancel</a>
                            <a href='/' onClick={handleBioUpdate} className={`mt-[7px] px-4 py-2 font-semibold text-[#ffffff] active:bg-[#444444] rounded-md bg-[#D82E38] ml-3 cursor-pointer ${!saveBtn && "pointer-events-none cursor-default opacity-[.5]"}`} disabled={saveBtn}>Save</a>
                        </div>
                    </div>
                }
                
                {   
                    user.bio && !showBio && (<div>
                        <p className="text-center mt-3 mb-3 text-[gray] text-[15px]">{user.bio}</p>
                        <a href="/" onClick={handleBioShow} className="mb-[10px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Edit Bio</a>
                    </div>)
                }
                
                {   
                    !user.bio && !showBio && (<div className="mt-3">
                        <a onClick={handleBioShow} href="/" className="mb-[10px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Add Bio</a>
                    </div>)
                }

                <ul className="list-none mb-2">
                    
                    {
                        user.work && user.work.map((data) => 

                        <li className="flex justify-start items-center text-[14px] mt-3"><MdWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Works at <a href="/" className="font-semibold hover:underline ml-1">{data.company}</a></li>
                        
                        )
                    }

                    <li className="flex justify-start items-center text-[14px] mt-3"><MdWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Studied at <a href="#" className="font-semibold hover:underline ml-1">Monoronjan Kapuria College</a></li>

                    <li className="flex justify-start items-center text-[14px] mt-3"><MdWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Went to <a href="#" className="font-semibold hover:underline ml-1">Chanchuri Purulia High School,Kalia,Narail.</a></li>

                    <li className="flex justify-start items-center text-[14px] mt-3"><MdHomeWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Lives in <a href="#" className="font-semibold hover:underline ml-1">Narail, Dhaka, Bangladesh</a></li>

                    <li className="flex justify-start items-center text-[14px] mt-3"><MdLocationOn className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> From <a href="#" className="font-semibold hover:underline ml-1">Narail, Dhaka, Bangladesh</a></li>

                    <li className="flex justify-start items-center text-[14px] mt-3"><AiFillHeart className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Single</li>

                    <li className="flex justify-start items-center text-[14px] mt-3"><RiTimeFill className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Joined on June 2019</li>

                    <li className="flex justify-start items-center text-[14px] mt-3"><MdLocationOn className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Followed by <a href="#" className="font-semibold hover:underline ml-1">160 people</a></li>
                </ul>

                <a href="/" onClick={handleDetailsModal} className="mb-[10px] mt-[15px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Edit Details</a>
                <a href="#" className="mb-[20px] mt-[15px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Add Hobbies</a>
                <div className="grid grid-cols-3 rounded-xl overflow-hidden gap-4">
                    {
                        user.featured.map((data, index) => 

                        <div onClick={handleShowFeatured} className="storyWrapper2 mt-1 cursor-pointer">
                            <img src={`/featured-image/${data[0]}`} alt="" className="h-[100%] w-[100%] object-cover"/>
                        </div>
                        
                        )
                    }
                </div>

                <a onClick={handleFeaturedPopupShow} href="/" className="mb-[10px] mt-[15px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center">Add Featured</a>

                
            </div>
        </div>

        <div className="w-[440px]">
            <div className="mb-3 p-4 mt-3 bg-[#ffffff] shadow-md rounded-md">
                <div className="flex justify-between items-center pb-4">
                    <h3 className="font-semibold text-[20px]">Photos</h3>
                    <a className="px-4 py-1 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444]" href="#">See all photos</a>
                </div>

                <div className="grid grid-cols-4 rounded-xl overflow-hidden gap-1">
                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                </div>
            </div>
        </div>

        <div className="w-[440px]">
            <div className="mb-3 p-4 mt-3 bg-[#ffffff] shadow-md rounded-md">
                <div className="flex justify-between items-center pb-4">
                    <div>
                        <h3 className="font-semibold text-[20px]">Friends</h3>
                        <h6 className="text-[gray] text-[14px] font-semibold">174 friends</h6>
                    </div>
                    <a className="px-4 py-1 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444]" href="#">See all friends</a>
                </div>

                <div className="grid grid-cols-3 gap-2">

                    <div className="w-[130px]">
                        <img className="w-[130px] h-[130px] rounded-lg object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                        <h6 className="text-[12px] font-semibold text-[#2b2b2b] tracking-tighter">Sheikh Mohammad Abdullah</h6>
                    </div>

                    <div className="w-[130px]">
                        <img className="w-[130px] h-[130px] rounded-lg object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                        <h6 className="text-[12px] font-semibold text-[#2b2b2b] tracking-tighter">Sheikh Mohammad Abdullah</h6>
                    </div>

                    <div className="w-[130px]">
                        <img className="w-[130px] h-[130px] rounded-lg object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                        <h6 className="text-[12px] font-semibold text-[#2b2b2b] tracking-tighter">Sheikh Mohammad Abdullah</h6>
                    </div>

                    <div className="w-[130px]">
                        <img className="w-[130px] h-[130px] rounded-lg object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                        <h6 className="text-[12px] font-semibold text-[#2b2b2b] tracking-tighter">Sheikh Mohammad Abdullah</h6>
                    </div>

                </div>
            </div>
        </div>

        {
            detailsModal && <ProfileDetailsModal setDetailsModal={setDetailsModal}/>
        }

        {
            featuredPopup && <FeaturedPopup setFeaturedPopup={setFeaturedPopup}/>
        }
    
    </>
  )
}

export default ProfileIntro;
