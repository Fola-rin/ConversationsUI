import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SideBar from "./components/Sidebar";

const App = () => {
	return (
		<div>
			<Header />
			<SideBar />

			<HomePage />
		</div>
	);
};

export default App;
