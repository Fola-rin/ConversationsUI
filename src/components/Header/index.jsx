import React from "react";

import SearchIcon from "@material-ui/icons/SearchOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CircledImg from "../CircledImg";
import NotificationCircleIcon from "@material-ui/icons/FiberManualRecord";

import picture1 from "../../assets/picture1.jpg";

import "./style.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header-wrapper">
				<h3>Conversations</h3>
				<div className="icons-wrapper">
					<div className="icon">
						<SearchIcon />
					</div>
					<div className="icon notification">
						<NotificationsIcon />
						<NotificationCircleIcon className="blue-circle" />
					</div>
					<div className="img-wrapper">
						<div className="img-ring">
							<CircledImg src={picture1} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
