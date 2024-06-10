import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NevBar from "./components/Layout";
import AmOwner from "./components/Owner";
import AtHome from "./App";

const router = createBrowserRouter([
	{
		path: "/Owner",
		element: <NevBar />,
		children: [
			{
				path: "",
				element: <AmOwner />,
			},
		],
	},
	{
		path: "/",
		element: <NevBar />,
		children: [
			{
				path: "",
				element: <AtHome />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
