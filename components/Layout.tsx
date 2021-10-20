import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: any = ({ children }: any): any => {
	return (
		<div className="content">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
