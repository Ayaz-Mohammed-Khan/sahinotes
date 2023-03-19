import React from "react";

const Profile = () => {
	return (
		<div className="profile">
			<div className="profile_details">
				<p>AK</p>
				<div className="profile_data">
					<p className="name">Ayaz Mohammed Khan</p>
					<p className="no_subs">200 Subscribers</p>
				</div>
				<button>SUBSCRIBE</button>
			</div>
			<div className="menu">
				<p className="underline">
					Notes <span id="underline_span">3</span>
				</p>
				<p>
					Noteslist <span>1</span>
				</p>
				<p>About</p>
			</div>
		</div>
	);
};

export default Profile;
