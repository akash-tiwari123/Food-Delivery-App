import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri"; // Remix Icons
import HeaderCartButton from "./HeaderCartButton";

const TopNav = () => {
  const [sidenav, setSideNav] = useState(false);
  console.log(sidenav);
  let navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let signup = () => {
    navigate("/");
  };

  // let contactus=()=>{
  //     navigate('/contactus')
  // }
  return (
    <div
      className={`fixed w-full z-10 ${
        scrolling ? "bg-[#24262b] text-white" : ""
      }`}
    >
      <div className=" max-w-[1520px] mx-auto mt-0 flex justify-between items-center p-4 border-b-2 shadow-[rgba(0, 0, 0, 0.1)_0px_20px_25px_-5px, rgba(0, 0, 0, 0.04)_0px_10px_10px_-5px]">
        {/* this is for left navbar */}
        <div
          onClick={() => {
            setSideNav(!sidenav);
          }}
          className="flex items-center"
        >
          <div className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              Testy
              <span className="text-orange-700 font-bold">Food</span>
            </h1>
          </div>
          <div className="hidden lg:flex items-center bg-gray-200 h-[40px] rounded-full p-1 text-[14px] cursor-pointer">
            <p className="bg-orange-700 text-white rounded-full w-[55px]  pt-2 ml-[-4px] mt-3 text-center font-bold h-10 ">
              {" "}
              <Link to="/homee" className="no-underline text-white">
                Free
              </Link>
            </p>
            <p className="pt-[14px] px-2 font-bold h-8 w-18">
              {" "}
              <Link to="/delivery" className="no-underline text-black">
                Delivery
              </Link>
            </p>
          </div>
        </div>
        {/* this is for  Search bar */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search meals"
          />
        </div>

        <div
          className="flex hover:text-orange-700  mr-[-110px] cursor-pointer"
          onClick={signup}
        >
          <RiLoginBoxLine size={25} />
          <h5>SignIn</h5>
        </div>

        {/* this is for Cart */}
        <div>
          <HeaderCartButton />
        </div>

        {/* this is for sideBar in left navbar */}
        {sidenav ? (
          <div
            className={`bg-black/60 fixed w-full h-screen z-10 top-0 left-0 `}
          ></div>
        ) : (
          ""
        )}

        <div
          className={
            sidenav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200 "
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200 "
          }
        >
          <AiOutlineClose
            onClick={() => {
              setSideNav(!sidenav);
            }}
            className={`absolute right-4 top-4 cursor-pointer ${
              scrolling ? " text-black" : ""
            }`}
            size={25}
          />
          <h2 className={`text-2xl p-4 ${scrolling ? " text-black" : ""}`}>
            Testy<span className="text-orange-700 font-bold">Food</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900">
              <Link className="text-gray-900 no-underline" to="/homee">
                <li className="text-xl py-3 mt-[-35px] flex cursor-pointer hover:bg-[#778899] hover:text-white hover:rounded-md">
                  <GiHouse
                    size={25}
                    className="mr-4 text-white bg-black rounded-full "
                  />
                  Home
                </li>
              </Link>
              <Link className="text-gray-900 no-underline" to="/delivery">
                <li className="text-xl py-3 flex cursor-pointer hover:bg-[#778899] hover:text-white hover:rounded-md">
                  <TbTruckReturn
                    size={25}
                    className="mr-4 text-white bg-black rounded-full"
                  />
                  Devilery
                </li>
              </Link>
              {/* <Link className="text-gray-900 no-underline" to="/favoritepage">
                <li className="text-xl py-3 flex cursor-pointer hover:bg-[#778899] hover:text-white hover:rounded-md">
                  <MdOutlineFavorite
                    size={25}
                    className="mr-4 text-white bg-black rounded-full"
                  />
                  My Favorite
                </li>
              </Link>
              <li className="text-xl py-3 flex cursor-pointer hover:bg-[#778899] hover:text-white hover:rounded-md">
                <FaGoogleWallet
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                My Wallet
              </li> */}
              <Link className="text-gray-900 no-underline" to="/contactus">
                <li className="text-xl py-3 flex cursor-pointer hover:bg-[#778899] hover:text-white hover:rounded-md">
                  <BsPerson
                    size={25}
                    className="mr-4 text-white bg-black rounded-full "
                  />
                  Contact Us
                </li>
              </Link>
              <Link className="text-gray-900 no-underline" to="/help">
                <li className="text-xl py-3 flex cursor-pointer hover:bg-[#778899] hover:text-white hover:rounded-md">
                  <MdHelp
                    size={25}
                    className="mr-4 text-white bg-black rounded-full"
                  />
                  Help & Support
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
