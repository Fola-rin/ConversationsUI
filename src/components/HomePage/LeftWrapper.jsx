import React from "react";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import CircledImg from "../CircledImg";

import picture1 from "../../assets/picture1.jpg";

import "./style.css";
const LeftWrapper = () => {
	return (
		<>
			<div className="wrapper-header">
				<div className="title-wrapper">
					<h4>Facebook</h4>
					<KeyboardArrowDownIcon />
				</div>
				<div className="title-wrapper">
					<h4 className="grey">Open</h4>
					<KeyboardArrowDownIcon />
				</div>
			</div>
			<div className="search-container">
				<input type="text" placeholder="Search" />
				<SearchIcon />
			</div>
			<div className="chat-summary-box">
				<div className="contents">
					<div className="img-wrapper">
						<CircledImg src={picture1} online bigger />
					</div>
					<div className="text-wrapper">
						<h4>Victor Olaiya</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
							deserunt cum sapiente dolorem veritatis, dolor beatae laboriosam
							voluptas laudantium officiis tenetur illo quam odit quo
							voluptatum, ipsum alias animi nostrum!
						</p>
						<div className="link-wrapper">
							<p>Facebook</p>
							<p className="open">Open</p>
						</div>
					</div>
					<div className="time-msg-wrapper">
						<p className="time">05:30</p>
						<p className="circle">1</p>
					</div>
				</div>
			</div>
			<hr />
			<div className="chat-summary-box">
				<div className="contents">
					<div className="img-wrapper">
						<CircledImg src={picture1} online bigger />
					</div>
					<div className="text-wrapper">
						<h4>Victor Olaiya</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
							deserunt cum sapiente dolorem veritatis, dolor beatae laboriosam
							voluptas laudantium officiis tenetur illo quam odit quo
							voluptatum, ipsum alias animi nostrum!
						</p>
						<div className="link-wrapper">
							<p>Facebook</p>
							<p className="progress">In Progress</p>
						</div>
					</div>
					<div className="time-msg-wrapper">
						<p className="time">05:30</p>
						<p className="circle">1</p>
					</div>
				</div>
			</div>
			<hr />
			<div className="chat-summary-box active">
				<div className="contents">
					<div className="img-wrapper">
						<CircledImg src={picture1} online bigger />
					</div>
					<div className="text-wrapper ">
						<h4>Victor Olaiya</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
							deserunt cum sapiente dolorem veritatis, dolor beatae laboriosam
							voluptas laudantium officiis tenetur illo quam odit quo
							voluptatum, ipsum alias animi nostrum!
						</p>
						<div className="link-wrapper">
							<p className="email">Email</p>
							<p className="closed">Closed</p>
						</div>
					</div>
					<div className="time-msg-wrapper">
						<p className="time">2 weeks ago</p>
						{/* <p className="circle">1</p> */}
					</div>
				</div>
			</div>
			<hr />
			<div className="chat-summary-box">
				<div className="contents">
					<div className="img-wrapper">
						<CircledImg src={picture1} online bigger />
					</div>
					<div className="text-wrapper">
						<h4>Victor Olaiya</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
							deserunt cum sapiente dolorem veritatis, dolor beatae laboriosam
							voluptas laudantium officiis tenetur illo quam odit quo
							voluptatum, ipsum alias animi nostrum!
						</p>
						<div className="link-wrapper">
							<p>Facebook</p>
							<p className="closed">Closed</p>
						</div>
					</div>
					<div className="time-msg-wrapper">
						<p className="time">a week ago</p>
						{/* <p className="circle">1</p> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default LeftWrapper;
