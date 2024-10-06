import { testDataAccess } from "../../data-acess/cookie";

export default async function Cookie() {
	// fetch cookie from data access
	const cookie = await testDataAccess();

	return (
		<div>
			<h1> {cookie.hasButter ? "Has Butter" : "No Butter"} </h1>
			<h1> {cookie.name} </h1>
		</div>
	);
}
