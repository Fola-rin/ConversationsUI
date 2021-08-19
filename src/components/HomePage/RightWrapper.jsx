import React, { useState } from "react";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SwapIcon from "@material-ui/icons/SwapHorizOutlined";
import PersonAdd from "@material-ui/icons/PersonAddOutlined";
import PersonCircle from "@material-ui/icons/AccountCircleOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import CircledImg from "../CircledImg";

import picture1 from "../../assets/picture1.jpg";

import "./style.css";
import MessageBox from "./MessageBox";

const RightWrapper = () => {
	const [closeChat, setCloseChat] = useState(false);

	const [markClosed, setMarkClosed] = useState(false);
	return (
		<>
			<div className="wrapper-header">
				<div className="details">
					<div className="img-wrapper">
						<CircledImg src={picture1} online bigger />
					</div>
					<div className="text-wrapper">
						<h4>Victor Olaiya</h4>
						<p>Via email (Sat, 13 Mar 2021 at 10:54AM)</p>
					</div>
				</div>
				<div className="utility">
					<div className="dropdown" onClick={() => setMarkClosed(!markClosed)}>
						<span className="desc">Mark as closed</span>
						<KeyboardArrowDownIcon />

						{markClosed && (
							<div className="mark-close">
								<p>Open</p>
								<p>Pending</p>
								<p>In progress</p>
								<p>Closed</p>
							</div>
						)}
					</div>
					<div className="icon">
						<SwapIcon />
					</div>
					<div className="icon">
						<PersonAdd />
					</div>
					<div className="icon">
						<PersonCircle />
					</div>
					<div
						className="icon icon-dropdown"
						onClick={() => setCloseChat(!closeChat)}
					>
						<CheckCircleIcon />
						{closeChat && <p className="close-chat">Close chat</p>}
					</div>
				</div>
			</div>

			<div className="complaint-title">
				<h4>How can I get a refund for my order?</h4>
				<p>Ticket ID: #53467</p>
			</div>
			<hr />

			<div className="complaint-text-wrapper">
				<p>Hi there,</p>
				<br />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
					sequi eius sunt, corporis vel veritatis quibusdam architecto quo omnis
					consectetur.
				</p>
				<br />
				<p>
					Best, <br /> Victor.
				</p>
				<br />
				<p className="date">
					<span>13 Mar 2021</span> <span>•</span>
					<span className="rect">▯</span>
				</p>
				<hr />
			</div>
			<div className="wrapper-header body-header">
				<div className="details">
					<div className="img-wrapper">
						<CircledImg src={picture1} bigger />
					</div>
					<div className="text-wrapper">
						<h4>
							Bolaji Williams <span>replied</span>
						</h4>
						<p>16 days ago (Sat, 13 Mar 2021 at 10:54AM)</p>
					</div>
				</div>
			</div>
			<div className="complaint-text-wrapper">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
					sequi eius sunt, corporis vel veritatis quibusdam architecto quo omnis
					consectetur.
				</p>
				<br />
				<p className="date">
					<span>13 Mar 2021 </span>
				</p>
			</div>
			<MessageBox />
		</>
	);
};

export default RightWrapper;
