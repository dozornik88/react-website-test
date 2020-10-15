import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						Noterance{" "}
						<div className="im-container">
							<img src="/images/logo2-1.jpg" alt="My logo" class="nav-logo" />
						</div>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Search
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/brands"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Brands
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/sign-up"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle="btn--outline"> Sign UP</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
