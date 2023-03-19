import React from "react";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import Profile from "../components/Profile";
import Notes from "../components/Notes";
import img1 from "../images/notes/notes1.png";
import img2 from "../images/notes/notes2.png";
import img3 from "../images/notes/notes3.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="page">
			<NavBar></NavBar>
			<div className="main">
				<SearchBox></SearchBox>
				<div className="gradient"></div>
				<Profile></Profile>
				<div className="notes_wrapper">
					<Link to={"/notes/1"}>
						<Notes
							img={img1}
							title="First Year: Dental Anatomy - Bones Complete (4 topics)"
							views="51K views"
							time="2 days ago"
							dot={true}
							pages="55"
						></Notes>
					</Link>
					<Link to={"/notes/2"}>
						<Notes
							img={img2}
							title="CIIPS: Triz benchmarking (Lecture 8)"
							views="29K views"
							time="6 days ago"
							dot={true}
							pages="19"
						></Notes>
					</Link>
					<Link to={"/notes/3"}>
						<Notes
							img={img3}
							title="JEE: Organic Chemistry - Halogens in 5 minutes"
							views="In Draft"
							dot={false}
							pages="12"
						></Notes>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
