import React from 'react'
import { useState } from 'react';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { userFeaturedPhotoUpdate } from '../../redux/auth/action.js';

const FeaturedPopup = ({setFeaturedPopup}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const [featuredAddShow, setFeaturedAddShow] = useState(true);
    const [featuredUpShow, setFeaturedUpShow] = useState(false);
    const [featuredUpload, setFeaturedUpload] = useState([]);
    const [featuredPhotos, setFeaturedPhotos] = useState([]);


    const handleFeaturedPopupClose = (event) => {
        event.preventDefault();
        setFeaturedPopup(false);
    }

    const handleUpShow = (event) => {
        event.preventDefault();
        setFeaturedUpShow(!featuredUpShow);
        setFeaturedAddShow(!featuredAddShow);
    }

    const handleAddShow = (event) => {
        event.preventDefault();
        setFeaturedUpShow(false);
        setFeaturedAddShow(true);
    }

    const handleUploadImage = (event) => {

        // let previewImages = [];
        // let profileFeaturedPhotos = [];
        // for(let i = 0; i < event.target.files.length; i++){
        //     const images = URL.createObjectURL(event.target.files[i]);
        //     previewImages.push(images);
        //     profileFeaturedPhotos.push(event.target.files[i]);
        // }

        setFeaturedUpload((prevState) => [...prevState, ...Array.from(event.target.files)]);
        setFeaturedPhotos((prevState) => [...prevState, ...Array.from(event.target.files)]);
        
    }
    
    const handleFeaturedInputChange = (event) => {
        
        let updatedPhotoList = [...featuredPhotos];
        let validation = featuredUpload.find((data) => event.target.value === data.name);
        
        if(featuredPhotos.includes(validation)){
            updatedPhotoList.splice(updatedPhotoList.indexOf(validation) ,1);
        }else{
            updatedPhotoList.push(validation);
        }

        setFeaturedPhotos(updatedPhotoList);

    }


    const handleFeaturedSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData();
        featuredPhotos.forEach((items) =>  {
            formData.append("featuredImage", items);
        });
        
        dispatch(userFeaturedPhotoUpdate(user._id, formData, setFeaturedPopup));

    }



  return (
    <>
    
        <div className="relative z-50">
            <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#ffffffbb] fixed left-0 right-0 top-0 text-[#2b2b2b]">
                <div className="w-[700px] rounded-lg bg-[#ffffff] shadow-xl py-5">

                    {
                        featuredAddShow && !featuredUpShow && <div className="px-5">
                            <div className="flex justify-between items-center border-b-[2px] border-[#ddd] pb-2">
                                <h3 className="text-[25px] font-bold">Add New Featured</h3>
                                <a href="/" onClick={(e) => {e.preventDefault(); setFeaturedPopup(false);}} className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#dadada] hover:bg-[#ccc]">
                                    <RxCross1 className="h-[20px] w-[20px]"/>
                                </a>
                            </div>

                            <div className="flex justify-center items-center">
                                <img className="w-[350px] h-auto" src="https://freesvgs.com/wp-content/uploads/2021/06/Pikachu-SVG-File-Free.png" alt="featured" />
                            </div>

                            <a onClick={handleUpShow} href="/" className="mt-[15px] px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] flex justify-center items-center">Add New</a>
                        </div>
                    }

                    {
                        featuredUpShow && !featuredAddShow && <div>
                                <div className="flex justify-between items-center border-b-[2px] border-[#ddd] pb-4 px-5">
                                    <a href="/" onClick={handleAddShow} className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#dadada] hover:bg-[#ccc]">
                                        <AiOutlineDoubleLeft className="h-[20px] w-[20px]"/>
                                    </a>
                                    <h3 className="text-[25px] font-bold">Featured collection</h3>
                                </div>

                                <form onSubmit={handleFeaturedSubmit}>
                                    <div className="px-5 pb-2">
                                        <label className="w-[100%] mt-[20px] px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] flex justify-center items-center" htmlFor="featuredImgUp">Upload photos</label>
                                        <input onChange={handleUploadImage} id="featuredImgUp" type="file" multiple hidden />
                                    </div>
                                
                                    <div className="h-[250px] overflow-auto scrollbar-hide px-5">
                                        <div className="mb-5">
                                            {/* <h3 className="text-[20px] mb-5 mt-5 font-bold">Uploaded image preview</h3> */}
                                            <div className="grid grid-cols-6 gap-3 mt-3">
                                                {
                                                    featuredUpload.map((image, index) => {

                                                        const prevURL = URL.createObjectURL(image);

                                                        return (
                                                        
                                                        <>
                                                        
                                                            <div className="uploadPreviewFeatured" key={`hgsgt${index}`}>
                                                                <label htmlFor={`checkbox-${index}`}>
                                                                    <img src={prevURL} className="h-[100%] w-[100%] object-cover" alt='img'/>
                                                                </label>
                                                                <div className="absolute right-5 bottom-2 round">
                                                                    <input value={image.name} checked={featuredPhotos.includes(image)} type="checkbox" id={`checkbox-${index}`} onChange={handleFeaturedInputChange} />
                                                                    <label htmlFor={`checkbox-${index}`}></label>
                                                                </div>
                                                            </div>
                                                        
                                                        </>

                                                    )})
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end px-5 border-t-[2px] border-[#ddd] pt-5">
                                        <a onClick={handleFeaturedPopupClose} href="/" className="px-4 py-2 font-semibold rounded-md text-[#fff] bg-[#444444]">Cancel</a>
                                        <button disabled={featuredPhotos.length === 0} className="px-5 py-2 font-semibold rounded-md text-[#fff] bg-[#D82E38] disabled:opacity-50 ml-3">Create</button>
                                    </div>
                                </form>                
                                
                            </div>
                    }

                </div>
            </div>
        </div>
    
    </>
  )
}

export default FeaturedPopup;
