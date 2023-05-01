import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop'
import { RxCross1 } from 'react-icons/rx';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiCrop } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { userProfilePhotoUpdate } from '../../redux/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import getCroppedImg from '../../utility/cropper';
import createToast from '../../utility/toast';


const ProfilePhotoModal = ({setProfilePhotoModal}) => {

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [profileEditorModal, setProfileEditorModal] = useState(false);

    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(0.8);
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

    const handleClickUploadProfile = (event) => {
        if(event.target.files){
            setProfileEditorModal(!profileEditorModal);
            const img = URL.createObjectURL(event.target.files[0]);
            setImage(img);
        }
    }

    const handleZoomPhoto = (event) => {
        setZoom(event.target.value);
    }

    const handleUploadProfilePhoto = async (event) => {
        event.preventDefault();
        try{

            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels,
                rotation
            );
            setCroppedImage(croppedImage);
            setImage(croppedImage);
    
            const blobImage = await fetch(croppedImage).then(res => res.blob()).catch(err => createToast(err.response.data.message, "error"));
    
            const completePhoto = new File([blobImage], "profilephoto.png", {
                type : "image/png"
            });
            console.log(completePhoto);
            const formData = new FormData();
            formData.append("profilePhoto", completePhoto);
            console.log(formData);
    
            dispatch(userProfilePhotoUpdate(user._id, formData, setProfileEditorModal));

        }catch(err){
            createToast(err.response.data.message, "error");
        }
    }


  return (
    <>
    
        <div className="relative z-50">
            <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#ffffffbb] fixed left-0 right-0 top-0 text-[#2b2b2b]">

                {
                    profileEditorModal && <div className="w-[700px] rounded-lg bg-[#ffffff] shadow-xl py-5">

                        <div className="flex justify-between items-center border-b-[3px] px-6 border-[#ddd] pb-2">
                            <h3 className="text-[25px] font-bold">Edit Profile Photo</h3>
                            <a href='/' onClick={(e) => {e.preventDefault(); setProfilePhotoModal(false);}} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#ccc]">
                                <RxCross1 className="h-[20px] w-[20px]"/>
                            </a>
                        </div>

                        <div className="px-6 mt-5 h-[500px] overflow-auto">

                            <div className="w-[100%] h-[380px] overflow-hidden relative">

                                <Cropper
                                    image={image}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={0.8 / 0.8}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                    cropSize={{width:300, height:300}}
                                    cropShape={"round"}
                                />

                            </div>

                            <div className="mt-4 mb-5 flex justify-center">
                                <button className="px-4 py-2 font-semibold outline-none text-[#ffffff] rounded-md bg-[#444444] hover:bg-[#353535] flex justify-center w-[150px] items-center" onClick={showCroppedImage}><BiCrop className="2xl mr-2"/>Crop</button>
                            </div>

                            <div className="zoomBlock flex justify-center items-center mt-3">
                                <a href="/" className=""><AiOutlinePlus className="text-2xl"/></a>
                                <input type="range" className="w-[60%] ml-2 mr-2 bg-[#D82E38] h-[7px] rounded-full appearance-none" min={0.8} max={5} step={0.05} value={zoom} onChange={handleZoomPhoto}/>
                                <a href="/" className=""><AiOutlineMinus className="text-2xl"/></a>
                            </div>
                            
                            <textarea name="caption" className="w-[100%] p-2 border-[2px] border-[#d0d0d0] rounded-md outline-none focus:border-[2px] focus:border-[#D82E38] resize-none mt-5 text-center mb-4" placeholder="Add your caption" rows="3"></textarea>

                        </div>
                        
                        <div className="flex justify-end items-center px-6 pt-5">
                            <a href='/' className="px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#444444] hover:bg-[#515151] mr-3">Cancel</a>
                            <button type='submit' onClick={handleUploadProfilePhoto} className="px-4 py-2 font-semibold text-[#ffffff] rounded-md bg-[#D82E38] hover:bg-[#ea3e4a] outline-none">Save</button>
                        </div>

                    </div>
                }

                {

                    !profileEditorModal && <div className="w-[700px] rounded-lg bg-[#ffffff] shadow-xl py-5">

                        <div className="flex justify-between items-center border-b-[3px] px-6 border-[#ddd] pb-2">
                            <h3 className="text-[25px] font-bold">Change Your Profile Photo</h3>
                            <a href='/' onClick={(e) => {e.preventDefault(); setProfilePhotoModal(false);}} className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#ccc]">
                                <RxCross1 className="h-[20px] w-[20px]"/>
                            </a>
                        </div>

                        <div className="flex justify-between px-5 pb-3 w-[100%]">
                            <div className="w-[43%]">
                                <label className="w-[100%] mt-[20px] px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] flex justify-center items-center" htmlFor="profileImgUp">Upload photo</label>
                                <input name="profilePhoto" onChange={handleClickUploadProfile} id="profileImgUp" type="file" hidden />
                            </div>
                            
                            <div className="w-[43%]">
                                <label className="w-[100%] mt-[20px] px-4 py-2 font-semibold rounded-md text-[#fff] bg-[#444444] flex justify-center items-center">Add Frame</label>
                            </div>
                            
                            <div className="w-[10%]">
                                <label className="w-[100%] mt-[20px] px-4 py-[9.5px] font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] flex justify-center items-center">
                                    <BsFillPencilFill className="text-xl"/>
                                </label>
                            </div>
                        </div>

                        <div className="h-[450px] overflow-auto px-5">

                            <div className="">
                                <h2 className="text-lg font-semibold mb-3">Suggest Photos</h2>
                                <div className="grid grid-cols-6 rounded-xl overflow-hidden gap-3">
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                    <img className="w-[100px] h-[100px] object-cover" src="https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg" alt="" />
                                </div>
                                <a href="/" className="mt-5 px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] hover:bg-[#d82e3969] flex justify-center items-center">See more</a>
                            </div>

                        </div>

                    </div>

                }

            </div>
        </div>
    
    </>
  )
}

export default ProfilePhotoModal;
