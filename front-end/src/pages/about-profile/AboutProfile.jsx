import React from 'react';
import { useState } from 'react';
import { AiFillDelete, AiFillHeart } from 'react-icons/ai';
import { BsFillPatchPlusFill, BsFillTelephoneFill, BsThreeDots } from 'react-icons/bs';
import { GiCalendarHalfYear, GiEarthAmerica, GiNewBorn } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import { MdHomeWork, MdLocationOn, MdMarkEmailRead, MdWork } from 'react-icons/md';
import HeaderOne from '../../components/header-one/HeaderOne';
import ProfileHeader from '../../components/profile-header/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileUpdate } from '../../redux/auth/action.js';
import createToast from '../../utility/toast';

const AboutProfile = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [overview, setOverview] = useState(true);
    const [worksEducation, setWorksEducation] = useState(false);
    const [contactInfo, setContactInfo] = useState(false);
    const [relations, setrelations] = useState(false);
    const [details, setDetails] = useState(false);
    const [lifeEvent, setLifeEvent] = useState(false);
    const [workspaceShow, setWorkspaceShow] = useState(false);
    const [workspace, setWorkspace] = useState({
        company : "",
        position : "",
        city : "",
        description : ""
    });
    const [workMenu, setWorkMenu] = useState(false);

    const handleUserMenu = (event) => {
        event.preventDefault();
        setWorkMenu(!workMenu);
    }

    const handleOverview  = (event) => {
        event.preventDefault();
        setOverview(true);
        setWorksEducation(false);
        setContactInfo(false);
        setDetails(false);
        setLifeEvent(false);
        setrelations(false);
    }

    const handleWorksEducation = (event) => {
        event.preventDefault();
        setOverview(false);
        setWorksEducation(true);
        setContactInfo(false);
        setDetails(false);
        setLifeEvent(false);
        setrelations(false);
    }

    const handleContactInfo = (event) => {
        event.preventDefault();
        setOverview(false);
        setWorksEducation(false);
        setContactInfo(true);
        setDetails(false);
        setLifeEvent(false);
        setrelations(false);
    }

    const handleRelationship = (event) => {
        event.preventDefault();
        setOverview(false);
        setWorksEducation(false);
        setContactInfo(false);
        setrelations(true);
        setDetails(false);
        setLifeEvent(false);
    }

    const handleWorkspaceShow = () => {
        setWorkspaceShow(true);
    }

    const handleCancelWorkspace = (event) => {
        event.preventDefault();
        setWorkspaceShow(false);
    }

    const handleinputChange = (event) => {
        setWorkspace((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    const handleWorkSave = (event) => {
        event.preventDefault();

        if(!workspace.company || !workspace.position || !workspace.city){
            createToast("Just description field is optional!", "warn");
        }else{
            dispatch(userProfileUpdate(user._id, {
                work : [...user.work, {
                    company : workspace.company,
                    position : workspace.position,
                    city : workspace.city,
                    description : `${workspace.description ? workspace.description : ""}`
                }]
            }, setWorkspaceShow));
            setWorkspace({
                company : "",
                position : "",
                city : "",
                description : ""
            })
        }
        
    }

  return (
    <>
    
        <HeaderOne/>
        <ProfileHeader/>

        <div className="bg-[#ddd]">
          <div className="w-[1010px] mx-auto pt-5 pb-5">

            <div className="flex justify-between shadow-md rounded-md p-4 bg-[#ffffff]">
                <div className="w-[350px] border-r-[2px] border-[#ccc]">
                    <div className="">
                        <h3 className="font-semibold text-[20px]">About</h3>
                    </div>
                    <ul className="list-none text-[gray]">
                        <li className="flex justify-start items-center text-[14px] mt-2 mr-3"><a onClick={handleOverview} href="/" className={`font-semibold hover:bg-[#d82e3957] w-[100%] p-2 rounded-md block hover:text-[#D82E38] ${ overview ? "activeTwo" : "" }`}>Overview</a></li>
                        <li className="flex justify-start items-center text-[14px] mt-2 mr-3"><a href="/" onClick={handleWorksEducation} className={`font-semibold hover:bg-[#d82e3957] w-[100%] p-2 rounded-md block hover:text-[#D82E38] ${ worksEducation ? "activeTwo" : null }`}>Works and educations</a></li>
                        <li className="flex justify-start items-center text-[14px] mt-2 mr-3"><a href="/" onClick={handleContactInfo} className={`font-semibold hover:bg-[#d82e3957] w-[100%] p-2 rounded-md block hover:text-[#D82E38] ${ contactInfo ? "activeTwo" : null }`}>Contact and basic info</a></li>
                        <li className="flex justify-start items-center text-[14px] mt-2 mr-3"><a href="#" onClick={handleRelationship} className={`font-semibold hover:bg-[#d82e3957] w-[100%] p-2 rounded-md block hover:text-[#D82E38] ${ relations ? "activeTwo" : "" }`}>Family and relationships</a></li>
                        <li className="flex justify-start items-center text-[14px] mt-2 mr-3"><a href="#" className="font-semibold hover:bg-[#d82e3957] w-[100%] p-2 rounded-md block hover:text-[#D82E38]">Details about you</a></li>
                        <li className="flex justify-start items-center text-[14px] mt-2 mr-3"><a href="#" className="font-semibold hover:bg-[#d82e3957] w-[100%] p-2 rounded-md block hover:text-[#D82E38]">Life events</a></li>
                    </ul>
                </div>

                <div className="w-[660px] pl-4">

                    {
                        overview && <div className="">
                            <ul className="list-none mt-1">
                                <li className="flex justify-between items-center text-[14px]">
                                    <div className="flex justify-start items-center">
                                        <MdWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Studied at <a href="#" className="font-semibold hover:underline ml-1">Monoronjan Kapuria College</a> 
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center text-[14px] mt-3">
                                    <div className="flex justify-start items-center">
                                        <MdWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Went to <a href="#" className="font-semibold hover:underline ml-1">Chanchuri Purulia High School,Kalia,Narail.</a>
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center text-[14px] mt-3">
                                    <div className="flex justify-start items-center">
                                        <MdHomeWork className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Lives in <a href="#" className="font-semibold hover:underline ml-1">Narail, Dhaka, Bangladesh</a>
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center text-[14px] mt-3">
                                    <div className="flex justify-start items-center">
                                        <MdLocationOn className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> From <a href="#" className="font-semibold hover:underline ml-1">Narail, Dhaka, Bangladesh</a>
                                    </div>
                                
                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center text-[14px] mt-3">
                                    <div className="flex justify-start items-center">
                                        <AiFillHeart className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Single
                                    </div>
                                
                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }

                    {
                        worksEducation && <div>
                            <div className="mt-1 mb-3">
                                <h3 className="text-[18px] font-bold">Works</h3>

                                {
                                    user.work && user.work.map((data, index) => 

                                    <div className="flex justify-between items-center mt-3 text-[#2b2b2b] cursor-pointer">
                                        <div className="flex justify-start items-center">
                                            <MdWork className="h-[30px] w-[30px] mr-3"/> Works at 
                                            <a href="/" className="text-[15px] hover:underline font-semibold ml-1">{data.company}</a>
                                        </div>

                                        <a href="/" onClick={handleUserMenu} className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2 relative">
                                            <BsThreeDots className="w-[20px] h-[20px]"/>

                                            {
                                                workMenu && <ul className="w-[200px] shadow-lg rounded-md bg-[#F3C0C3] absolute right-[35px] top-[-23px] overflow-hidden">
                                                <li><a className="flex p-2 items-center justify-start hover:bg-[#f7a3a9] w-[100%]" href="/"><GrEdit className="h-[19px] w-[19px] mr-3"/> Edit workplace</a></li>
                                                <li><a className="flex p-2 items-center justify-start hover:bg-[#f7a3a9] w-[100%]" href="/"><AiFillDelete className="h-[19px] w-[19px] mr-3"/> Delete workplace</a></li>
                                            </ul>
                                            }
                                        </a>
                                    </div>
                                    
                                    )
                                }
                                
                                {
                                    !workspaceShow && <div onClick={handleWorkspaceShow} className="flex justify-start items-center mt-3 hover:underline text-[#D82E38] cursor-pointer">
                                        <BsFillPatchPlusFill className="h-[30px] w-[30px]"/>
                                        <span className="text-[15px] font-semibold ml-5">Add a workspace</span>
                                    </div>
                                }

                                {
                                    workspaceShow && <div className="">
                                        <form>
                                            <input value={workspace.company} onChange={handleinputChange} name="company" type="text" className="p-3 w-[100%] rounded-md outline-none border-[3px] mt-3 mb-1 focus:border-[#D82E38] border-[#bdbdbd]" placeholder="Company" />

                                            <input value={workspace.position} onChange={handleinputChange} name="position" type="text" className="p-3 w-[100%] rounded-md outline-none border-[3px] mt-3 mb-1 focus:border-[#D82E38] border-[#bdbdbd]" placeholder="Position" />

                                            <input value={workspace.city} onChange={handleinputChange} name="city" type="text" className="p-3 w-[100%] rounded-md outline-none border-[3px] mt-3 mb-1 focus:border-[#D82E38] border-[#bdbdbd]" placeholder="City/Town" />

                                            <textarea value={workspace.description} onChange={handleinputChange} name="description" className="p-3 w-[100%] focus:border-[#D82E38] rounded-md outline-none border-[3px] mt-3 mb-3 border-[#bdbdbd]" rows="5" placeholder="Description"></textarea>

                                            <div className="flex justify-between items-center">
                                                <a className="px-4 py-2 font-semibold text-[#ffffff] flex items-center justify-between rounded-md bg-[#444444]" href="/"><GiEarthAmerica className="h-[20px] w-[20px] mr-2"/> public</a>

                                                <div className="flex">
                                                    <a onClick={handleCancelWorkspace} className="px-4 py-2 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#444444]" href="/">Cancel</a>
                                                    <a onClick={handleWorkSave} className="px-5 py-2 ml-3 font-semibold text-[#ffffff] rounded-md bg-[#D82E38]" href="/">Save</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                }

                            </div>

                            <div className="mt-4 mb-3">
                                <h3 className="text-[18px] font-bold">Education</h3>
                                <div className="flex justify-start items-center mt-3 hover:underline">
                                    <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                    <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add secondary school</a>
                                </div>

                                <div className="flex justify-start items-center mt-3 hover:underline">
                                    <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                    <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add university</a>
                                </div>
                            </div>
                        </div>
                    }
                    
                    {
                        contactInfo && <div>
                            <ul className="list-none mt-1">
                                <h3 className="text-[18px] font-bold mb-3">Contact info</h3>
                                
                                <li className="flex justify-between items-center text-[16px]">
                                    <div className="flex justify-start items-center">
                                        <BsFillTelephoneFill className="h-[25px] w-[25px] text-[gray] mr-3 mb-1"/> 01631699535
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center mt-5 text-[16px]">
                                    <div className="flex justify-start items-center">
                                        <MdMarkEmailRead className="h-[25px] w-[25px] text-[gray] mr-3 mb-1"/> rohanofficial@gmail.com
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <h3 className="text-[18px] font-bold mb-3 mt-3">Websites and social links</h3>
                                
                                <li className="flex justify-between items-center mt-5 text-[16px]">
                                    <div className="flex justify-start items-center">
                                        <GiEarthAmerica className="h-[25px] w-[25px] text-[gray] mr-3 mb-1"/> <a href="" className="block font-semibold text-[#D82E38] hover:underline">www.rohanmostafa.com</a>
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <h3 className="text-[18px] font-bold mb-3 mt-3">Basic info</h3>

                                <div className="flex justify-start items-center mt-3 hover:underline">
                                    <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                    <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add a language</a>
                                </div>

                                <li className="flex justify-between items-center mt-5 text-[16px]">
                                    <div className="flex justify-start items-center">
                                        <FaUserAlt className="h-[25px] w-[25px] text-[gray] mr-3 mb-1"/> Male
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center mt-5 text-[16px]">
                                    <div className="flex justify-start items-center">
                                        <GiNewBorn className="h-[25px] w-[25px] text-[gray] mr-3 mb-1"/> 22 April
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <li className="flex justify-between items-center mt-5 text-[16px]">
                                    <div className="flex justify-start items-center">
                                        <GiCalendarHalfYear className="h-[25px] w-[25px] text-[gray] mr-3 mb-1"/> 2002
                                    </div>

                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }

                    {
                        relations && <div>
                            <ul className="list-none mt-1">
                                <h3 className="text-[18px] font-bold mb-3">Relationship</h3>

                                <li className="flex justify-between items-center text-[14px] mt-4">
                                    <div className="flex justify-start items-center">
                                        <AiFillHeart className="h-[25px] w-[25px] text-[gray] mr-2 mb-1"/> Single
                                    </div>
                                
                                    <a href="/" className="w-[35px] h-[35px] rounded-full text-[#2b2b2b] flex justify-center items-center bg-[#ddd] hover:bg-[#c9c9c9] mr-2">
                                        <BsThreeDots className="w-[20px] h-[20px]"/>
                                    </a>
                                </li>

                                <h3 className="text-[18px] font-bold mb-4 mt-3">Family members</h3>

                                <li className="flex justify-between items-center text-[14px] mt-4">
                                    <div className="flex justify-start items-center mt-1 hover:underline">
                                        <BsFillPatchPlusFill className="h-[30px] w-[30px] text-[#D82E38]"/>
                                        <a href="/" className="text-[#D82E38] text-[15px] font-semibold ml-5">Add family member</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                    
                </div>
            </div>

          </div>
        </div>
    
    </>
  )
}

export default AboutProfile;
