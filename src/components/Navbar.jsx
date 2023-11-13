/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell, faSquare, faMoon } from "@fortawesome/free-regular-svg-icons";
import SearchBox from "./SearchBox";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between">
      {/* LEFT NAVBAR */}
      <div className="ml-5 flex items-center gap-5">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faBars}
          onClick={toggleSidebar}
        />
        <SearchBox />
        <FontAwesomeIcon className="cursor-pointer" icon={faBell} />
      </div>
      {/* RIGHT NAVBAR */}
      <div className="flex items-center gap-5">
        <FontAwesomeIcon className="cursor-pointer" icon={faSquare} />
        <FontAwesomeIcon className="cursor-pointer" icon={faMoon} />
        <div className="flex flex-col gap-1">
          <p className="text-xs">your ip address is:</p>
          <p className="rounded-sm bg-blue-100 text-blue-400 py-1 text-center text-xs">
            172.16.101.105
          </p>
        </div>
        {/* PROFILE IMAGE */}
        <div className="bg-gray-100 h-full flex justify-center items-center gap-2 py-4 px-3">
          <div>
            <img
              className="rounded-full"
              src="http://placekitten.com/30/30"
              alt=""
            />
          </div>
          {/* PROFILE INFO */}
          <div className="text-sm">
            <p>Budi Arifianto</p>
            <p className="text-gray-400">IT ADMINISTRATOR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
