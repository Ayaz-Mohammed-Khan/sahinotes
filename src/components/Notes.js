import React from "react";
import dot from "../images/dot.png";
import tickMark from "../images/tickmark.png";

const Notes = (props) => {
	return (
		<div className="notes_container">
			<img alt="" src={props.img}></img>
			<p className="notes_pages">{props.pages}</p>
			<div>
				<p className="notes_title">{props.title}</p>
				<div className="wrapper">
					<p className="notes_views">{props.views}</p>
					{props.dot && <img alt="" src={dot}></img>}
					{props.dot && <p className="notes_time">{props.time}</p>}
				</div>
				{props.dot && <img alt="" className="checkbox" src={tickMark}></img>}
			</div>
		</div>
	);
};

export default Notes;
