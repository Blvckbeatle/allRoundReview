import {
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaFacebookF,
	FaTelegramPlane,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export const style = {
	fontSize: "23px",
	background: "rgba(255,255,255,0)",
	overflow: "hidden",
};

export const socialLinks: any[] = [
	{
		title: "Twitter",
		link: "https://twitter.com/isaacchukwuka_",
		icon: <FaTwitter style={style} />,
	},
	{
		title: "Facebook",
		link: "https://web.facebook.com/allroundreview1?_rdc=1&_rdr",
		icon: <FaFacebookF style={style} />,
	},
	{
		title: "Telegram",
		link: "https://t.me/allroundreview",
		icon: <FaTelegramPlane style={style} />,
	},
	{
		title: "Youtube",
		link: "https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q",
		icon: <IoLogoYoutube style={style} />,
	},
	// {
	//     title: "Telegram",
	//     link: "https://t.me/Mvtrixx",
	//     icon: <FaTelegramPlane style={style} />,
	// },
];

export const navLinks: any[] = [
	{
		title: "News",
		path: "/news",
	},
	{
		title: "Reviews",
		path: "/reviews",
	},
	{
		title: "Videos",
		path: "/videos",
	},
	{
		title: "Featured",
		path: "/featured",
	},
	{
		title: "Phone search",
		path: "/phone-search",
	},
];
export const footerLinks: any[] = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About us",
		path: "/about-us",
	},
	{
		title: "Contact us",
		path: "/contact-us",
	},
	{
		title: "Copyright",
		path: "/Copyright",
	},
	{
		title: "Terms",
		path: "/terms",
	},
	{
		title: "Privacy",
		path: "/privacy",
	},
	{
		title: "Sponsor",
		path: "/sponsor",
	},
	{
		title: "Partnership",
		path: "/partnership",
	},
];
