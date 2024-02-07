const formatDate = (dateString) => {
	const [day, month, year] = dateString.split("-");
	const parsedDate = new Date(`${year}-${month}-${day}T00:00:00Z`);

	const options = { year: "numeric", month: "short", day: "numeric" };
	const formattedDate = parsedDate.toLocaleDateString("en-US", options);
	return formattedDate;
};

export default formatDate;