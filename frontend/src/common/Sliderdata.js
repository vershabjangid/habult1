import { IoIosHome } from "react-icons/io";
// import { IoPersonSharp } from "react-icons/io5";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { IoShareSocial } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
// import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";

export let sidebardata = [
    {
        id : 1,
        icon : <IoIosHome />,
        name : "Home",
        path : "/dashboard-panel"
    },

    {
        id : 2,
        icon :<IoPeopleSharp />,
        name : "Team",
        path : "/team"
    },

    
    {
        id : 3,
        icon : <FaPersonMilitaryPointing />,
        name : "Our Services"
    },

    
    {
        id : 4,
        icon : <FaQuestion />,
        name : "Faq"
    },

    
    {
        id : 5,
        icon : <BiSolidContact />,
        name : "Contact Us"
    },

    
    {
        id : 6,
        icon : <FaFileWaveform />,
        name : "Forms"
    },

    {
        id : 7,
        icon : <IoShareSocial />,
        name : "Socials"
    },

    {
        id : 8,
        icon : <IoMdSettings />,
        name : "Settings"
    },
]
