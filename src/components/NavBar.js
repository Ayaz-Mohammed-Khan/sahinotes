import React, { useState } from "react";
import logo from "../images/logo.png";
import plusIcon from "../images/plus.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [slideOut, setSlideOut] = useState(false);
	function addNewNote() {
		console.log("New note added");
	}
	return (
		<>
			<div className="hamburger">
				<Hamburger
					color="#098041"
					onToggle={() => setSlideOut((p) => !p)}
				></Hamburger>
			</div>
			<div className={`nav_bar${!slideOut ? " translateOut" : ""}`}>
				<img className="logo" src={logo} alt="logo"></img>
				<div onClick={addNewNote} className="new_note_btn">
					<img className="plus_icon" src={plusIcon} alt="plusIcon"></img>
					<p>New note</p>
				</div>
				<p>
					<Link to={"/"} className="current">
						Home
					</Link>
				</p>
				<p>
					<Link to={"/"}>Saved Notes</Link>
				</p>
			</div>
		</>
	);
};

export default NavBar;
