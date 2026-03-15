export function getKhoaAge() {
	const currentYear = new Date().getFullYear();
	const age = currentYear - 1999;
	return age;
}

export function getUserLocalTime() {
	const userLocalTime = new Date();
	return userLocalTime.toLocaleString();
}

export function getVietnamTime() {
	const vietnamOffset = 7 * 60; // Vietnam is UTC+7, so offset in minutes
	const localTime = new Date();
	const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
	const vietnamTime = new Date(utcTime + vietnamOffset * 60000);
	return vietnamTime.toLocaleString();
}
