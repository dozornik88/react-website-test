import React from "react";
import "../../App.css";
import { brandData } from "../data";
import "../Brands.css";

export const Brands = () => {
	return (
		<>
			<HomePageHeader />
			<div className="stock-container">
				{brandData.map((data, key) => {
					return (
						<div key={key}>
							<Brand
								key={key}
								title={data.title}
								description={data.description}
								logo={data.logo}
								country={data.country}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

const HomePageHeader = () => {
	return (
		<header className="header">
			<h2>All The Brands</h2>
		</header>
	);
};

const Brand = ({ title, description, logo, country }) => {
	if (!title) return <div />;
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<h5>{title}</h5>
					</td>
					<td>
						<h5>{description}</h5>
					</td>
					<td>
						<img src={logo} alt="img" height="55" />
					</td>
					<td>
						<p>{country}</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Brands;