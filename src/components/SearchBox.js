import React from "react";
import searchIcon from "../images/search.png";
const SearchBox = () => {
	function search() {}
	return (
		<div onClick={search} className="search_box">
			<input type="search"></input>
			<img src={searchIcon} alt="Search Icon"></img>
		</div>
	);
};

export default SearchBox;
