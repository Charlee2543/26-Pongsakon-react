function AdminPage() {
	return (
		<div>
			<section>
				<h2>Create User Here</h2>
				<article className="flex gap-8">
					<input
						type="text"
						placeholder="  Name"
						className="bg-[#ffffff h-[56px] w-[300px] text-black]"
					/>
					<input
						type="text"
						placeholder="  Last Name"
						className="#ffffff h-[56px] w-[300px]"
					/>
					<input
						type="text"
						placeholder="  Position"
						className="#ffffff h-[56px] w-[300px]"
					/>
				</article>
			</section>
		</div>
	);
}
export default AdminPage;
