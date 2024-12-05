import { FaHome, FaIndustry, FaQuestion } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
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
    }
]