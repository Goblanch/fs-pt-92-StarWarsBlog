import React from "react";
import { Link } from "react-router-dom";
import FavoritesDropDown from "./FavoritesDropDown.jsx";

import StarWarsLogo from "../../img/StarWarsLogo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={StarWarsLogo} className="img img-fluid h-25 w-25 ms-4"/>
			</Link>
			<div className="ml-auto me-5">
				<Link to="/demo">
					<FavoritesDropDown/>
				</Link>
			</div>
		</nav>
	);
};
