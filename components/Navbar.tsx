import { useState, useEffect } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import Search from "../assets/search.svg";
import Allroundreview from "../assets/allroundreview.svg";
import { navLinks, socialLinks } from "../utiles/constant";
import Image from "next/image";

const Navbar = () => {
	const [search, setSearch] = useState(false);
	const [darkMood, setDarkMood] = useState(false);
	const [menuToggle, setMenuToggle] = useState(false);
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? localStorage.theme : "dark"
	);

	useEffect(() => {
		if (theme == "dark") {
			document.body.classList.add("dark");
		}
	}, []);

	const toggleTheme: any = (): void => {
		const root = document.body.classList;
		root.toggle("dark");

		let getTheme = "light";
		if (root.contains("dark")) {
			getTheme = "dark";
			setTheme(getTheme);
		}
		setTheme(getTheme);
		localStorage.setItem("theme", getTheme);
	};

	useEffect(() => {
		menuToggle && (document.body.style.overflow = "hidden");
		!menuToggle && (document.body.style.overflow = "unset");
	}, [menuToggle]);

	return (
		<header>
			<Link href="/">
				<a className="logo">
					<h1>
						AllRound<span>Review</span>
					</h1>
					{/* <Allroundreview /> */}
				</a>
			</Link>

			<nav className={`nav-list`}>
				{navLinks.map((navLinks, idx) => (
					<Link href={navLinks.path} key={idx}>
						<a>{navLinks.title}</a>
					</Link>
				))}
			</nav>

			{/* <div>
				<Link href="/about">
					<a className="btn btn-secondary heading-sm">Login</a>
				</Link>
				<Link href="/about">
					<a className="btn btn-primary heading-sm">Sign Up</a>
				</Link>
			</div> */}

			<div className={`nav-actions-container `}>
				{/* dark mode toogle button */}
				<button
					className="dark-mode-toggle-container"
					onClick={() => toggleTheme()}
					type="button"
					title={darkMood ? "Toggle lightmode" : "Toggle darkmode"}
				>
					{theme !== "dark" ? <Moon /> : <Sun />}
				</button>

				<div className={`search-container ${search ? " active" : ""}`}>
					{/* search input feild */}
					<div
						className={`nav-search hider`}
						aria-labelledby="dropdownMenuButton"
					>
						<button
							className="search-close"
							type="submit"
							onClick={() => setSearch(!search)}
						>
							<IoClose />
						</button>
						<input
							className="nav-search "
							type="text"
							placeholder="Search for anything"
						/>
					</div>
					{/* search toggle button */}
					<button
						type="button"
						title="Search"
						className={`search-toggle ${
							search ? "search-toggle-active" : ""
						}`}
						onClick={() => setSearch(!search)}
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<Search />
					</button>
				</div>

				{/* follow dropdown */}
				<div className="menu-follow-btn">
					<span className="heading-sm">
						Follow Us <IoIosArrowDown />
					</span>
					<div className="drop-down">
						<h4>Follow All-Round Review</h4>
						<ul>
							{socialLinks.map((socials: any, idx: number) => (
								<li key={idx}>
									<a
										href={socials.link}
										target="_blank"
										title={socials.title}
									>
										{socials.icon}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* burger toggle for mobile view */}
				<button
					className={`burger ${menuToggle ? "toggle" : ""}`}
					onClick={() => {
						setMenuToggle(!menuToggle);
					}}
				>
					<div className="line1"></div>
					<div className="line3"></div>
				</button>
			</div>

			<div
				className={`side-bar-container ${
					menuToggle ? "active-side-bar" : ""
				}`}
			>
				<div
					className="backdrop"
					onClick={() => setMenuToggle(!menuToggle)}
				></div>

				<div className="side-bar">
					<nav className={`nav-list-toggle`}>
						{navLinks.map((navLinks, idx) => (
							<Link href={navLinks.path} key={idx}>
								<a>{navLinks.title}</a>
							</Link>
						))}
					</nav>

					<div className="nav-socials">
						<h4>Follow All-Round Review</h4>
						<ul>
							{socialLinks.map((socials: any, idx: number) => (
								<li key={idx}>
									<a
										href={socials.link}
										target="_blank"
										title={socials.title}
									>
										{socials.icon}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
