import React, { useState } from "react";
import CircledImg from "../CircledImg";

import picture1 from "../../assets/picture1.jpg";

import XIcon from "@material-ui/icons/CloseOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import AttachIcon from "@material-ui/icons/AttachFileOutlined";
import GifIcon from "@material-ui/icons/Gif";
import BoldIcon from "@material-ui/icons/FormatBold";
import ItalicIcon from "@material-ui/icons/FormatItalic";
import UnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import AlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import AlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import AlignRightIcon from "@material-ui/icons/FormatAlignRight";
import LinkIcon from "@material-ui/icons/Link";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import BookIcon from "@material-ui/icons/ImportContactsOutlined";
import ClipIcon from "@material-ui/icons/AssignmentOutlined";

import "./style.css";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
const MessageBox = () => {
	const [ccOpen, setCcOpen] = useState(false);
	const [bccOpen, setBccOpen] = useState(false);

	const [ccClicked, setCcClicked] = useState(false);

	const [sendClicked, setSendClicked] = useState(false);
	return (
		<div className="message-box-container">
			<div className="box-wrapper">
				<div className=" box">
					<div className="content-box">
						<p>To:</p>
						<div className="email">
							<div className="img-wrapper">
								<CircledImg src={picture1} />
							</div>
							{/* <p className="content"> */}
							<p>
								{" "}
								<span>steph.okafor@alphax.com</span>
								<XIcon />
							</p>

							{/* </p> */}
						</div>
					</div>
					<p className="blue">
						<span onClick={() => setCcOpen(true)}>cc</span>{" "}
						<span onClick={() => setBccOpen(true)}>bc</span>
					</p>
				</div>
				<hr />
				{ccOpen && (
					<>
						<div className="cc-box box">
							<div className="content-box">
								<p>cc:</p>
								<div className="email">
									<div className="img-wrapper">
										<CircledImg src={picture1} />
									</div>
									{/* <p className="content"> */}
									<p>
										{" "}
										<span onClick={() => setCcClicked(true)}>
											steph.okafor@alphax.com
										</span>
										<XIcon onClick={() => setCcOpen(false)} />
									</p>

									{/* </p> */}
								</div>
							</div>
							{ccClicked && (
								<div className="suggested">
									<h4>Suggested Contacts</h4>
									<div onClick={() => setCcClicked(false)}>
										<CircledImg src={picture1} />
										<span>steph.okafor@alphax.com</span>
									</div>
									<div onClick={() => setCcClicked(false)}>
										<CircledImg src={picture1} />
										<span>steph.okafor@alphax.com</span>
									</div>
								</div>
							)}
						</div>
						<hr />
					</>
				)}
				{bccOpen && (
					<>
						<div className="box">
							<div className="content-box">
								<p>bcc:</p>
								<div className="email">
									<div className="img-wrapper">
										<CircledImg src={picture1} />
									</div>
									{/* <p className="content"> */}
									<p>
										{" "}
										<span>steph.okafor@alphax.com</span>
										<XIcon onClick={() => setBccOpen(false)} />
									</p>

									{/* </p> */}
								</div>
							</div>
						</div>
						<hr />
					</>
				)}
				<div className="message-input-box">
					<textarea rows="5" placeholder="Enter message" />
				</div>

				<div className="action-conatiner">
					<div className="icons-wrapper">
						<div className="icon">
							<EmojiIcon />
						</div>
						<div className="icon">
							<AttachIcon />
						</div>
						<div className="icon">
							<GifIcon />
						</div>
						<div className="icon">
							<BoldIcon />
						</div>
						<div className="icon">
							<ItalicIcon />
						</div>
						<div className="icon">
							<UnderlinedIcon />
						</div>
						<div className="icon">
							<AlignLeftIcon />
						</div>
						<div className="icon">
							<AlignCenterIcon />
						</div>
						<div className="icon">
							<AlignRightIcon />
						</div>
						<div className="icon">
							<LinkIcon />
						</div>
						<div className="icon">
							<ImageIcon />
						</div>
						<div className="icon">
							<BookIcon />
						</div>
						<div className="icon">
							<ClipIcon />
						</div>
					</div>
					<div className="action" onClick={() => setSendClicked(!sendClicked)}>
						<p>Send</p>
						<div className="icon">
							<KeyboardArrowDown />
						</div>

						{sendClicked && (
							<div className="pop-up">
								<p onClick={() => setSendClicked(false)}>Send as reply</p>
								<p onClick={() => setSendClicked(false)}>
									Send as internal comment
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
