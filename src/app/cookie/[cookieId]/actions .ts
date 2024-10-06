"use server";

import { revalidatePath } from "next/cache";

export async function updateCookie(formData: FormData) {
	const hasButter = formData.get("hasButter");
	const hasNuts = formData.get("hasNuts");

	console.log(hasButter, hasNuts);
	revalidatePath("/cookie/[cookieId]");
}
