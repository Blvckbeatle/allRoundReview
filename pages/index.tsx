import type { NextPage } from "next";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

type Users = {
	users: any[];
};

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data: Users[] = await res.json();

	return {
		props: { data },
	};
};

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>All-Round Review | Home</title>
			</Head>

			{console.log(data)}
			<div className={styles.container}>
				<h1>homepage</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Vitae maiores blanditiis ad provident fugiat non rem! Vitae,
					molestiae dolorem? Sit aliquid itaque, impedit nemo velit
					fugiat blanditiis ducimus dolorem. Recusandae. Lorem ipsum
					dolor sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae.Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Vitae maiores blanditiis
					ad provident fugiat non rem! Vitae, molestiae dolorem? Sit
					aliquid itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. fugiat blanditiis ducimus dolorem.
					Recusandae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Vitae maiores blanditiis ad provident fugiat non rem! Vitae,
					molestiae dolorem? Sit aliquid itaque, impedit nemo velit
					fugiat blanditiis ducimus dolorem. Recusandae. Lorem ipsum
					dolor sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae.Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Vitae maiores blanditiis
					ad provident fugiat non rem! Vitae, molestiae dolorem? Sit
					aliquid itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. fugiat blanditiis ducimus dolorem.
					Recusandae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Vitae maiores blanditiis ad provident fugiat non rem! Vitae,
					molestiae dolorem? Sit aliquid itaque, impedit nemo velit
					fugiat blanditiis ducimus dolorem. Recusandae. Lorem ipsum
					dolor sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae.Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Vitae maiores blanditiis
					ad provident fugiat non rem! Vitae, molestiae dolorem? Sit
					aliquid itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. fugiat blanditiis ducimus dolorem.
					Recusandae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Vitae maiores blanditiis ad provident fugiat non rem! Vitae,
					molestiae dolorem? Sit aliquid itaque, impedit nemo velit
					fugiat blanditiis ducimus dolorem. Recusandae. Lorem ipsum
					dolor sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae. Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Vitae maiores
					blanditiis ad provident fugiat non rem! Vitae, molestiae
					dolorem? Sit aliquid itaque, impedit nemo velit fugiat
					blanditiis ducimus dolorem. Recusandae.Lorem ipsum dolor sit
					amet consectetur, adipisicing elit. Vitae maiores blanditiis
					ad provident fugiat non rem! Vitae, molestiae dolorem? Sit
					aliquid itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Vitae maiores blanditiis ad provident
					fugiat non rem! Vitae, molestiae dolorem? Sit aliquid
					itaque, impedit nemo velit fugiat blanditiis ducimus
					dolorem. Recusandae. fugiat blanditiis ducimus dolorem.
					Recusandae.
				</p>

				{/* <Image src="/logo.png" width="500" height="500" /> */}
			</div>
		</>
	);
};

export default Home;
