import { footerLinks } from "../utiles/constant";
import Link from "next/link";

const Footer = () => {
	return (
		<footer>
			<a className="logo">
				<h1>
					AllRound<span>Review</span>
				</h1>
				{/* <Allroundreview /> */}
			</a>

			<nav>
				{footerLinks.map((footerLinks, idx) => (
					<Link href={footerLinks.path} key={idx}>
						<a>{footerLinks.title}</a>
					</Link>
				))}
			</nav>
			<div className="footer-copy">
				Copyright © 2021 www.allroundreview.com
			</div>
		</footer>
	);
};

export default Footer;
