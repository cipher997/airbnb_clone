import { useState } from 'react';
import { FaBars, FaGlobe, FaUserCircle, FaHome, FaUmbrellaBeach } from 'react-icons/fa';
import { MdRoomService, MdSearch } from 'react-icons/md';

const tabs = [
  {
    label: 'Homes',
    icon: <FaHome className="text-xl" />,
    isNew: false,
  },
  {
    label: 'Experiences',
    icon: <FaUmbrellaBeach className="text-xl" />,
    isNew: true,
  },
  {
    label: 'Services',
    icon: <MdRoomService className="text-xl" />,
    isNew: true,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-gray-100 z-50 ">

        
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png"
            alt="Airbnb"
            className="h-7 md:h-10"
          />
        </div>

         {/* Tabs Section */}
      <div className="flex justify-center items-center gap-6 px-4 py-3 overflow-x-auto md:justify-start md:px-10 bg-gray-100">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm font-medium text-gray-700 cursor-pointer relative"
          >
            <div className="flex items-center gap-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
            {/* {tab.isNew && (
              <span className="text-xs text-white bg-gray-800 px-1 py-0.5 rounded absolute top-0 right-[-20px]">
                NEW
              </span>
            )} */}
          </div>
        ))}
      </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <p className="hidden md:inline text-sm font-semibold cursor-pointer">Become a host</p>
          <div className="flex items-center gap-2 bg-gray-300 p-3 rounded-full cursor-pointer">
          <FaGlobe className="hidden md:inline cursor-pointer " />
          </div>
          <div className="flex items-center gap-2 bg-gray-300 p-3 rounded-full cursor-pointer">
            <FaBars className="" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {/* <FaUserCircle className="text-xl text-gray-600" /> */}
          </div>
        </div>
      </header>

     
    </div>
  );
};

export default Header;
