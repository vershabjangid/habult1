import { FaHome, FaIndustry, FaInfo, FaPhone, FaQuestion, FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export let sidedata = [
    {
        Name: "Dashboard",
        Path: "/dashboard",
        icon: <MdOutlineSpaceDashboard />
    },
    {
        Name: "Home",
        Path: "/home",
        icon: <FaHome />
    },
    {
        Name: "About",
        Path: "/dash-about",
        icon: <FaInfo />
    },
    {
        Name: "Contact",
        Path: "/dash-contact",
        icon: <FaPhone/>
    },
    {
        Name: "Terms",
        Path: "/dash-terms",
        icon: <SiGoogledocs />
    },
    {
        Name: "Privacy-Policy",
        Path: "/dash-policy",
        icon: <IoShieldCheckmarkSharp/>
    },
    {
        Name: "Industry",
        Path: "/industry",
        icon: <FaIndustry />
    },
    {
        Name: "Faq",
        Path: "/faq",
        icon: <FaQuestion />
    }, {
        Name: "Requests",
        Path: "/requests",
        icon: <FaPlus />
    },
    {
        Name: "Team",
        Path: "/team",
        icon: <FaUser />
    }
]