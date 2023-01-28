import React from 'react'

const Story = ({name, userProfile, storyImage}) => {



  return (
    
    <div className="storyWrapper">
        <h6 className="z-10 absolute left-3 top-3 text-[#ffffff] text-[12px] font-semibold">{name}</h6>
        <img src={userProfile} className="h-[40px] rounded-full w-[40px] z-10 object-cover absolute left-3 bottom-3 border-[3px] border-[#D82E38]"/>
        <img src={storyImage} className="h-[100%] w-[100%] object-cover"/>
    </div>
    
  )
}

export default Story;