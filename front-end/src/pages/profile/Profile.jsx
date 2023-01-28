import React from 'react';
import HeaderOne from '../../components/header-one/HeaderOne';
import ProfileHeader from '../../components/profile-header/ProfileHeader';
import ProfileIntro from '../../components/profile-intro/ProfileIntro';
import ProfileTimeline from '../../components/profile-timeline/ProfileTimeline';

const Profile = () => {


    
  return (
    <>
    
        <HeaderOne/>
        <ProfileHeader/>

        <div className="bg-[#ddd]">
          <div className="w-[1010px] mx-auto flex justify-between">

            <div>
              <ProfileIntro/>
            </div>
            
            <div>
              <ProfileTimeline/>
            </div>

          </div>
        </div>
    
    </>
  )
}

export default Profile;
