import { useContext, useState } from "react";
import "./Header.css"
import { ThemeContext } from "../../ThemeContext";
import { BiSearch ,
         BiLogOut} from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Header = () => {
    const {DarkTheme, setDarkTheme} = useContext(ThemeContext);
    function changeTheme() {
      setDarkTheme(!DarkTheme);
    }

    const logout = () =>{
      signOut(auth)
    };


  return (
  <header className={`${DarkTheme && "dark"}`}>
    <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
    </div>

    <div className="tools">
    <FaUserAlt className="icon" />
    <TbMessages className="icon" />
    <IoAnalytics className="icon" />


    <div className="divider"></div>
    <BsFillMoonStarsFill className="icon" onClick={changeTheme} />
    <AiFillSetting className="icon" />
    <BiLogOut className="icon" onClick={logout}/>
        <div className="divider"></div>

        <div className="user">
            <img src="https://t4.ftcdn.net/jpg/05/56/62/65/360_F_556626587_NYmwKW2MRnrLQn6jSybCYhR6rdwcWIXl.jpg" alt="" className="profile-img" />
        </div>
    </div>
  </header>
  );
};

export default Header;