import React from 'react'
import { useState } from 'react';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const FeaturedPopup = ({setFeaturedPopup}) => {

    const [featuredAddShow, setFeaturedAddShow] = useState(true);
    const [featuredUpShow, setFeaturedUpShow] = useState(false);
    const [featuredUpload, setFeaturedUpload] = useState([]);

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
        let previewImages = [];
        for(let i = 0; i < event.target.files.length; i++){
            const images = URL.createObjectURL(event.target.files[i]);
            console.log(images);
            previewImages.push(images);
        }
        setFeaturedUpload(previewImages);
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
                        featuredUpShow && <div>
                                <div className="flex justify-between items-center border-b-[2px] border-[#ddd] pb-4 px-5">
                                    <a href="/" onClick={handleAddShow} className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#dadada] hover:bg-[#ccc]">
                                        <AiOutlineDoubleLeft className="h-[20px] w-[20px]"/>
                                    </a>
                                    <h3 className="text-[25px] font-bold">Featured collection</h3>
                                </div>

                                <div className="px-5 pb-2">
                                    <label className="w-[100%] mt-[20px] px-4 py-2 font-semibold rounded-md text-[#D82E38] bg-[#d82e3957] flex justify-center items-center" htmlFor="featuredImgUp">Upload photos</label>
                                    <input onClick={handleUploadImage} id="featuredImgUp" type="file" multiple hidden />
                                </div>

                                <div className="h-[250px] overflow-auto scrollbar-hide px-5">
                                    <div className="mb-5">
                                        {/* <h3 className="text-[20px] mb-5 mt-5 font-bold">Uploaded image preview</h3> */}
                                        <div className="grid grid-cols-6 gap-3">
                                            {
                                                featuredUpload.map((image, index) => 
                                                
                                                <div className="uploadPreviewFeatured">
                                                    <img src={image} className="h-[100%] w-[100%] object-cover"/>
                                                </div>
                                                
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end px-5 border-t-[2px] border-[#ddd] pt-5">
                                    <a onClick={handleFeaturedPopupClose} href="/" className="px-4 py-2 font-semibold rounded-md text-[#fff] bg-[#444444]">Cancel</a>
                                    <a href="/" className="px-5 py-2 font-semibold rounded-md text-[#fff] bg-[#D82E38] ml-3">Next</a>
                                </div>

                            </div>
                    }

                </div>
            </div>
        </div>
    
    </>
  )
}

export default FeaturedPopup;
