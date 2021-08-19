import React from "react";
import NotificationCircleIcon from "@material-ui/icons/FiberManualRecord";
import "./style.css";
const CircledImg = ({ src, online, bigger }) => {
	return (
		<div className={`circled-img ${bigger && "bigger"}`}>
			<img src={src} alt="" /> {online && <NotificationCircleIcon />}
		</div>
	);
};

export default CircledImg;
