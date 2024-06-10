import { Outlet, Link } from "react-router-dom";

const NevBar = () => {
	return (
		<div className="bg-[#e8e8e8] p-10">
			<ul className=" flex justify-end items-center">
				<li className="my-8">
					<Link to="/">Home</Link>
				</li>
				<li className="my-8 mx-11">
					<Link to="/Owner">Owner</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	);
};
export default NevBar;
