export function getKhoaAge(): number {
	const currentYear = new Date().getFullYear();
	const age = currentYear - 1999;
	return age;
}

export function getUserLocalTime(): string {
	const userLocalTime = new Date();
	return userLocalTime.toLocaleString();
}

export function getVietnamTime(): string {
	const vietnamOffset = 7 * 60;
	const localTime = new Date();
	const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
	const vietnamTime = new Date(utcTime + vietnamOffset * 60000);
	return vietnamTime.toLocaleString();
}
