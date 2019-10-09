function prepData() {
	return new Promise((res, rej) => {
		//data from file
		let jsonData = null;

		//load county-detail data
		d3.json("https://d3js.org/us-10m.v1.json").then(jsonRes => {
			jsonData = jsonRes;
			res(jsonData);
		});
	});
}
