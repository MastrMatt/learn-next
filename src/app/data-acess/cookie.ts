interface Cookie {
	name: string;
	hasButter: boolean;
	hasNuts: boolean;
}

export async function testDataAccess() {
	let butterMilkCookie: Cookie = {
		name: "Butter Milk",
		hasButter: true,
		hasNuts: false,
	};

	return butterMilkCookie;
}
