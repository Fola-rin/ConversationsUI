import React from "react";

import LogoIcon from "@material-ui/icons/FilterDrama";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";
import StarIcon from "@material-ui/icons/LocalActivityOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined";
import PieChartIcon from "@material-ui/icons/PieChartOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import GotoIcon from "@material-ui/icons/ExitToAppOutlined";

import "./style.css";

const SideBar = () => {
	return (
		<div className="side-bar">
			<div className="logo-container">
				<LogoIcon />
			</div>
			<div className="sidebar-icons-container">
				<div className="icons-wrapper">
					<div className="icon">
						<MenuIcon />
					</div>
					<div className="icon active">
						<MessageIcon />
					</div>
					<div className="icon">
						<StarIcon />
					</div>
					<div className="icon">
						<PersonIcon />
					</div>
					<div className="icon">
						<PieChartIcon />
					</div>
					<div className="icon">
						<SettingsIcon />
					</div>
				</div>
				<div className="goto-icon">
					<GotoIcon />
				</div>
			</div>
		</div>
	);
};

export default SideBar;
