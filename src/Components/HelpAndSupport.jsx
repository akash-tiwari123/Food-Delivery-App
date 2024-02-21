import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TopNav from "./TopNav";

const HelpAndSupport = () => {

  // this is using for changing backgroundColor of Faxe,legal, partnerOnboarding
  const [selectedLink, setSelectedLink] = useState(null);
  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
  };
  const getLinkStyle = (linkId) => {
    return selectedLink === linkId
      ? { backgroundColor: "white", color:"red"}
      : {};
  };

  return (
    <div className="w-full h-full">
      <div>
        <TopNav   className='' />
      </div>
      <div className="pt-24 z-10">
        <div className="bg-[#37718E] text-white w-full ">
          <div className="z-10">
            <h2 className="font-extrabold pt-5 pl-7">Help & Support</h2>
            <p className="pl-7">
              Welcome to our help and support page. If you have any questions or
              issues, please feel free to reach out to our support team.
            </p>
          </div>
          <div className="bg-white   mt-12 ml-7 ">
            <div className="flex justify-start items-start ">

              {/* left */}
              <div className="bg-[#EDF1F7] w-[270px] ml-16 mt-16 h-[400px]  pl-5 pt-10 ">
                <Link to="faqs" className=" no-underline">
                  <div
                      style={getLinkStyle("faxx")}
                      onClick={() => handleLinkClick("faxx")}
                  >
                    <h6 className="py-6 pl-16 text-[#535665]">
                      FAQs
                    </h6>
                  </div>
                </Link>

                <Link to="legal" className=" no-underline">
                  <div
                    onClick={() => handleLinkClick("help")}
                    style={getLinkStyle("help")}
                  >
                    <h6 className="py-6 pl-16 text-[#535665]">Legal</h6>
                  </div>
                </Link>

                <Link to="partner" className=" no-underline">
                  <div
                    onClick={() => handleLinkClick("partner")}
                    style={getLinkStyle("partner")}
                  >
                    <h6 className="py-6 pl-16 text-[#535665] ">Partner OnBoarding</h6>
                  </div>
                </Link>
              </div>

              {/* right */}
              <div className="text-black mt-28  ml-11 cursor-pointer w-[800px]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
