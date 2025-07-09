import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { TbLetterLSmall, TbLetterPSmall } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import gsap from "gsap";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const{logout,user} = useAuth();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const chal = useRef(null);
  const optionsRef = useRef(null);

  const toggleOpen = () => setOpen((prev) => !prev);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const options = optionsRef.current;

    if (open) {
      options.style.display = "flex";
      gsap.to(container, {
        height: container.scrollHeight,
        duration: 0.4,
        ease: "none",
      });

      gsap.fromTo(
        options,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.1,
          ease: "none",
        }
      );
    } else {
      gsap.to(options, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "none",
        onComplete: () => {
          if (options) options.style.display = "none";
        },
      });

      gsap.to(container, {
        height: chal.current.offsetHeight+1, // Adjust based on the height of the trigger row (in px)
        duration: 0.3,
        ease: "none",
      });
    }
  }, [open]);
  useEffect(() => {
    console.log(chal.current.offsetHeight);
  
})
  
  return (
    <div
      ref={containerRef}
      className="w-full rounded-lg bg-white transition-all"
    //   style={{height:`${chal.current.offsetHeight}`}}// Initial height of trigger part
    >
      {/* Trigger */}
      <div
        onClick={toggleOpen}
        className="w-full flex items-center justify-between gap-[1vw] p-[0.5vw] rounded-lg hover:bg-gray-300 cursor-pointer"
        ref={chal}
      >
        <div className="size-[2vw] rounded-full overflow-hidden shrink-0 border-1 border-gray-400">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
            className="size-full object-center object-cover"
            alt="profile"
          />
        </div>
        <p className="text-[0.8vw] line-clamp-2 font-bold w-full">
          {user?.username || "User Name"}
        </p>
        <IoIosArrowForward
          className={`text-[1.5vw] text-gray-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Options */}
      <ul
        ref={optionsRef}
        className="text-[0.8vw] flex-col gap-[0.1vw] mt-[0.4vw] font-semibold hidden"
      >
        {/* <li className="p-[0.5vw] hover:bg-gray-100 rounded-lg cursor-pointer flex items-center gap-[1vw]">
          <TbLetterPSmall className="font-semibold text-[1.9vw]" />
          Profile
        </li> */}
        <li onClick={logout} className="p-[0.5vw] hover:bg-gray-100 rounded-lg text-red-500 cursor-pointer flex items-center gap-[1vw]">
          <TbLetterLSmall className="font-semibold text-[1.9vw]" />
          <p>Log Out</p>
        </li>
      </ul>
      <div className="h-[0.5px] w-full bg-gradient-to-r from-white via-gray-300 to-white " />
    </div>
  );
};

export default Profile;
