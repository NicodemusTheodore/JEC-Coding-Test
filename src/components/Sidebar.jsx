/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faPager,
  faHome,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen }) => {
  const [isEncounterOpen, setEncounterOpen] = useState(true);
  const [isInpatientOpen, setInpatientOpen] = useState(false);
  const [isLayoutsOpen, setLayoutsOpen] = useState(false);

  const handleToggle = (menu) => {
    switch (menu) {
      case "encounter":
        setEncounterOpen(!isEncounterOpen);
        setInpatientOpen(false);
        setLayoutsOpen(false);
        break;
      case "inpatient":
        setInpatientOpen(!isInpatientOpen);
        setEncounterOpen(false);
        setLayoutsOpen(false);
        break;
      case "layouts":
        setLayoutsOpen(!isLayoutsOpen);
        setEncounterOpen(false);
        setInpatientOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <aside
      className={`${isOpen ? "block" : "hidden"} bg-cyan-600 w-[15vw] p-4`}
    >
      <div className="mb-7 text-center">
        <div className="font-bold text-2xl">VELZON</div>
      </div>
      <nav className="flex flex-col gap-4 text-white">
        <div className="flex justify-between items-center">
          <div className="font-bold italic text-xs">MENU</div>
        </div>
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle("encounter")}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex justify-center items-center">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div>Encounter</div>
            </div>
            <FontAwesomeIcon
              icon={isEncounterOpen ? faAngleDown : faAngleRight}
              className="mr-5"
            />
          </div>
          {isEncounterOpen && (
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-4 flex items-center ml-1">-</div>
                  <div>Registration</div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-4 flex items-center ml-1">-</div>
                  <div>Appointment</div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-4 flex items-center ml-1">-</div>
                  <div>Reminder</div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-4 flex items-center ml-1">-</div>
                  <div>Crypto</div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-4 flex items-center ml-1">-</div>
                  <div>Projects</div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-4 flex items-center ml-1">-</div>
                  <div className="flex items-center justify-between w-[90%]">
                    <div>NFT</div>
                    <div className="bg-red-400 text-white italic text-sm px-2 rounded-sm">
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle("inpatient")}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex justify-center items-center">
                <FontAwesomeIcon icon={faBorderAll} />
              </div>
              <div>Inpatient</div>
            </div>
            <FontAwesomeIcon
              icon={isInpatientOpen ? faAngleDown : faAngleRight}
              className="mr-5"
            />
          </div>
          {isInpatientOpen && <div className="flex flex-col gap-2 mt-3"></div>}
        </div>
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle("layouts")}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex justify-center items-center">
                <FontAwesomeIcon icon={faPager} />
              </div>
              <div>Layouts</div>
            </div>
            <FontAwesomeIcon
              icon={isLayoutsOpen ? faAngleDown : faAngleRight}
              className="mr-5"
            />
          </div>
          {isLayoutsOpen && <div className="flex flex-col gap-2 mt-3"></div>}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
