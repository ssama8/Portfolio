import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
const Technologies = [
	{ name: "HTML5", icon: <AiFillHtml5 />, id: 1 },
	{ name: "CSS3", icon: <FaCss3Alt />, id: 2 },
	{ name: "JavaScript", icon: <IoLogoJavascript />, id: 3 },
	{ name: "Node.Js", icon: <FaNodeJs />, id: 4 },
	{ name: "GitHub", icon: <AiFillGithub />, id: 5 },
	{ name: "Express", icon: <SiExpress />, id: 6 },
	{ name: "React Js", icon: <GrReactjs />, id: 7 },
	{ name: "Mongo DB", icon: <SiMongodb />, id: 8 },
];

export default Technologies;
