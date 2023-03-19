import React from "react";
import thumbsUpIcon from "../images/thumbsup.png";
import shareIcon from "../images/shareicon.png";
import threeDots from "../images/threedots.png";
import profilePic from "../images/profilepic.png";
import book1 from "../images/book1.png";
import arrow from "../images/arrow.png";
import arrowInverted from "../images/arrow_inverted.png";
import img1 from "../images/notes/notes1.png";
import img2 from "../images/notes/notes2.png";
import img3 from "../images/notes/notes3.png";
import { Link } from "react-router-dom";

const NotesPage = (props) => {
	const [isAside, setIsAside] = React.useState(true);
	let arrowUrl = isAside ? arrow : arrowInverted;
	let aside_class = isAside ? "aside" : "aside-hidden";
	let notes_class = isAside ? "notes_page" : "notes_hidden";
	let imageUrl;
	if (props.img === "notes1") imageUrl = img1;
	else if (props.img === "notes2") imageUrl = img2;
	else if (props.img === "notes3") imageUrl = img3;
	function handler() {
		setIsAside((prev) => !prev);
	}
	function Aside() {
		return (
			<div>
				<div className="aside_wrapper_1 container">
					<img alt="" className="aside_w1_imgs" src={thumbsUpIcon}></img>
					<p>28 Likes</p>
					<img alt="" className="aside_w1_imgs" src={shareIcon}></img>
					<p>Share</p>
					<img alt="" className="three_dots" src={threeDots}></img>
				</div>
				<div className="aside_wrapper_2 container">
					<div>
						<img alt="" src={profilePic}></img>
						<div>
							<h4>Ayaz Mohammed Khan</h4>
							<p>GPA 10</p>
						</div>
					</div>
					<button>Follow</button>
				</div>
				<div className="container">
					<h2 className="heading">Description</h2>
					<p>
						Tristique posuere faucibus sed vel ut suspendisse. kasjassda
						Pellentesque purus accumsan nisl platea odio metus. Egestas sit
						malesuada sit sit habitant. Odio ornare potenti neque diam urna id.
						Ultrices massa massa consequat habitant dui massa sapien et, morbi.
						Malesuada scelerisque non fermentum, velit ullamcorper vestibulum.
						Orci velit tortor ornare et urna arcu nisl. Ipsum neque nulla sed id
						venenatis.
					</p>
				</div>
				<div className="container">
					<h2>Resourses</h2>
					<div className="aside_wrapper_3">
						<img alt="" src={book1}></img>
						<div>
							<strong>
								Wheeler's Dental Anatomy, Physiology and Occlusion, 1st South
								Asia Edition
							</strong>
							<button>Buy on amazon</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={notes_class}>
			<main className={isAside ? "notes_page_main" : "main_expand"}>
				<div className="main_container">
					<div>
						<Link to={"/"}>
							<img alt="" className="main_arrow" src={arrowInverted}></img>
						</Link>
						<h2>{props.title}</h2>
					</div>
					<img alt="" src={imageUrl}></img>
				</div>
			</main>
			<aside className={aside_class + " aside_mobile"}>
				<img
					alt=""
					onClick={handler}
					className="aside_arrow"
					src={arrowUrl}
				></img>
				{isAside && <Aside></Aside>}
			</aside>
		</div>
	);
};

export default NotesPage;
