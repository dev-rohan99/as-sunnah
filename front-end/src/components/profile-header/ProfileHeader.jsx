import React, { useCallback, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaCamera } from 'react-icons/fa';
import { BiDotsHorizontal } from 'react-icons/bi';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { MdPhotoCamera } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import Avatar from '../avatar/Avatar';
import ProfilePhotoModal from '../modals/ProfilePhotoModal';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utility/cropper';


const ProfileHeader = () => {

    const { user } = useSelector((state) => state.auth);
    const [profilePhotoModal, setProfilePhotoModal] = useState(false);
    const [coverPhotoPrev, setCoverPhotoPrev] = useState(false);

    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(3);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels,
                rotation
            )
            setCroppedImage(croppedImage);
            setImage(croppedImage);
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, rotation]);

    const handleProfileModalShow = (event) => {
        event.preventDefault();
        setProfilePhotoModal(!profilePhotoModal);
    }

    const handleCoverPhotoUpload = (event) => {
        if(event.target.files){
            setCoverPhotoPrev(true);
            const img = URL.createObjectURL(event.target.files[0]);
            setImage(img);
        }
    }


  return (
    <>

        { profilePhotoModal && <ProfilePhotoModal setProfilePhotoModal={setProfilePhotoModal}/> }

        {
            coverPhotoPrev && <div className="relative">
                <div className="bg-[#11111188] z-30 flex justify-end items-center px-6 absolute left-0 right-0 top-[66px] py-3">
                    <a href='/' className="px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] hover:bg-[#515151] mr-3">Cancel</a>
                    <button type='submit' className="px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#D82E38] hover:bg-[#ea3e4a] outline-none">Save</button>
                </div>
            </div>
        }
    
        <div className="bg-gradient-to-b from-[#d82e399c]">

            <div className="w-[1070px] mx-auto h-[400px] rounded-b-xl bg-gradient-to-t from-[#131313a1] relative overflow-hidden">
                {
                    coverPhotoPrev && <div className="w-[100%] z-10 h-[100%] absolute left-0 right-0 top-0">
                        {/* <div className="w-[100%] h-[100%]"> */}
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={0.8 / 0.8}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                                cropSize={{width:"100%", height:"100%"}}
                                showGrid={false}
                            />
                        {/* </div> */}
                    </div>
                }

                <img className="w-[100%] h-[100%] absolute left-0 right-0 top-0" src={ user.coverPhoto ? user.coverPhoto : "https://i.pinimg.com/originals/f7/6d/8b/f76d8b2151662648ef12face46c6396f.jpg"} alt="coverphoto" />

                <label className="absolute right-5 z-20 bottom-5 px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#D82E38] flex justify-center items-center" htmlFor="featuredImgUp"><FaCamera className="text-xl mr-2"/>Add Cover Photo</label>
                <input name="coverPhoto" onChange={handleCoverPhotoUpload} id="featuredImgUp" type="file" hidden />
            </div>

        </div>

        <div className="border-b-[3px] border-[#ddd]">
            <div className="w-[1010px] mx-auto mt-[-40px] flex justify-between items-end pb-[20px] border-b-[3px] border-[#ddd]">

                <div className="w-[500px] z-30 flex items-end justify-start relative">
                    <div className="relative">
                        <img 
                            src={user.avatar ? `/profile-photo/${user.avatar}` : 'https://cdn-icons-png.flaticon.com/512/219/219988.png' } 
                            alt="user" 
                            className="w-[160px] h-[160px] border-[5px] border-[#fff] rounded-full object-cover"
                        />
                        <a onClick={handleProfileModalShow} href="/" className="absolute right-[19px] bottom-[10px] rounded-full w-[25px] h-[25px] flex justify-center items-center bg-[#D82E38] text-[#fff]"><MdPhotoCamera className="text-md"/></a>
                    </div>

                    <div className="mb-[15px] w-[500px] ml-3 absolute right-[-170px]">
                        <h3 className="text-[29px] font-semibold mb-[-5px]">{user.firstName} {user.surName}</h3>
                        <h3 className="text-[16px] cursor-pointer hover:underline font-semibold text-[gray]">174 friends</h3>

                        <div className="flex justify-start">

                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                            <img className="w-[30px] h-[30px] border-[3px] border-[#fff] rounded-full object-cover ml-[-7px]" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />

                        </div>
                    </div>
                </div>

                <div className="w-[500px] z-30 flex items-center justify-end">
                    <a href="#" className="mb-[10px] px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#D82E38] flex justify-center items-center"><BsFillPlusSquareFill className="w-[15px] h-[15px] mr-2"/> Add Your Story</a>
                    <a href="#" className="mb-[10px] px-4 py-2 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex justify-center items-center"><AiFillEdit className="w-[15px] h-[15px] mr-2"/> Edit Profile</a>
                </div>

            </div>

            <div className="w-[1010px] mx-auto flex justify-between items-center">

                <div className="w-[700px]">
                    <ul className="list-none">
                        <li className="inline-block"><a className="profileHeaderMenuItems activeThree" href="/">Posts</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">About</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">Friends</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">Photos</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems" href="/">Videos</a></li>
                        <li className="inline-block"><a className="profileHeaderMenuItems flex justify-center items-center" href="/">More <RiArrowDownSFill className="w-[20px] h-[20px] ml-[3px]"/></a></li>
                    </ul>
                </div>

                <div className="w-[200px] flex justify-end">
                    <a href="/" className="px-4 py-2 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444] flex items-center"><BiDotsHorizontal className="w-[20px] h-[20px]"/></a>
                </div>

            </div>
        </div>

    
    </>
  )
}

export default ProfileHeader;
