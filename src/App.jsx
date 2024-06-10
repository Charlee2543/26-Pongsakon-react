// import React from "react";
import { useState } from "react";
import AdminPage from "./components/Admin";
import UserPage from "./components/User";

function App() {
	const [user, setUser] = useState(false);
	const [admin, setAdmin] = useState(false);
	// const [outPut, setOutPut] = useState();
	const clickUser = () => {
		setUser(true);
		setAdmin(true);
	};
	const clickAdmin = () => {
		setUser(false);
		setAdmin(true);
	};
	// console.log("admin : " + admin + "  User : " + user);
	return (
		<div>
			<h1 className="">Generation Thailand</h1>
			<h1 className="">React - Assessment</h1>
			<button type="button" onClick={clickUser} className="bg-slate-500 m-10">
				User Home Sector
			</button>
			<button type="button" onClick={clickAdmin} className="bg-slate-500 m-10">
				Admin Home Sector
			</button>
			{admin ? user ? <UserPage /> : <AdminPage /> : ""}
		</div>
	);
}

export default App;
