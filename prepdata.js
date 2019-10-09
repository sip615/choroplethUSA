/* import { deepStrictEqual } from "assert"; */

function prepData() {
	return new Promise((res, rej) => {
		//placeholder for data from file
		let csvData = null;

		//load county-based data
		d3.csv("./data/cornYield.csv").then(csvRes => {
			csvData = csvRes;

			//load atlas data
			d3.json("https://d3js.org/us-10m.v1.json").then(jsonRes => {
				const counties = topojson.feature(jsonRes, jsonRes.objects.counties);

				//connect county IDs to the geographic data
				counties.features.forEach(d => {
					//get county id
					let thisCountyID = d.id;

					//assign 'countyName' key to the counties feature elements
					d.countyName = csvData.filter(
						csv => csv.fips == [thisCountyID]
					)[0].county;

					return d;
				});
				res(counties);
			});
		});
	});
}
