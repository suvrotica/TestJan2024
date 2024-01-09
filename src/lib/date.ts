export function getCurrentDateAsString(): string {
	const months: string[] = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const currentDate: Date = new Date();
	const year: number = currentDate.getFullYear();
	const month: string = months[currentDate.getMonth()];
	const day: number = currentDate.getDate();

	const formattedDate: string = `${year}-${month}-${day}`;

	return formattedDate;
}

// Example usage
// const currentDate: string = getCurrentDateAsString();
// console.log(currentDate);
