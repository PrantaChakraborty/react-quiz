import React from "react";
import Account from "./Account";
import classes from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";

function Nav() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<a href="index.html" className={classes.brand}>
						<img src={logo} alt="Learn with Sumit Logo" />
						<h3>Learn with Sumit</h3>
					</a>
				</li>
			</ul>
			<Account />
		</nav>
	);
}

export default Nav;
