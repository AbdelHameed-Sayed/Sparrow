import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InputBox from '../../components/home/Feed/InputBox';
import Index from '../../components/home/Feed/posts/Index';
import Intro from '../../components/profile/Intro';
import ProfileFooter from '../../components/profile/ProfileFooter';
import ProfileFriends from '../../components/profile/ProfileFriends';
import ProfilePhotos from '../../components/profile/ProfilePhotos';
import { axiosInstance } from '../../network/axiosInstance';

function ProfilePosts() {
  // To open create post modal:
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-3 bg-slate-200 dark:bg-zinc-900 transition duration-700">
      <div className="w-11/12 m-auto">
        <div className="py-2.5 px-9">
          <div className="grid lg:grid-cols-2 grid-col-1 gap-1">
            {/* bottom left */}
            <div className="lg:w-5/6 w-full mt-3 xl:ml-20 lg:ml-14">
              <Intro />
              {/* Profile Photos */}
              <ProfilePhotos />
              {/* Profile friends */}
              <ProfileFriends />
              {/* Profile footer */}
              <ProfileFooter />
            </div>
            {/* bottom right */}
            <div>
              {/* create post */}
              <InputBox showModal={showModal} setShowModal={setShowModal} />

              {/* post */}
              <Index postsProfile={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePosts;
