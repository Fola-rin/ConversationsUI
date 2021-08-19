import React from "react";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";

import "./style.css";
const HomePage = () => {
	return (
		<div className="homepage-container">
			<div className="homepage-wrapper">
				<div className="content-container">
					<div className="left-wrapper">
						<LeftWrapper />
					</div>
					<div className="right-wrapper">
						<RightWrapper />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
