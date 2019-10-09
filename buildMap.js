function enterMap(enterSelection) {
	//append a path for each selection (each county/feature)
	enterSelection
		.append("path")
		//use pathGenerator function to build the data
		//value for each county path, using the 'd' attribute
		.attrs({
			d: d => pathGenerator(d),
			class: "countyPath"
		});
}

function prepMap(srcData) {
	//select the svgElement with D3
	let svgObj = d3.select(".svgWrapper");

	//make a data join paths
	let dataJoin = svgObj
		.selectAll("path")
		//join the FEATURES to the PATHS
		.data(srcData.features)
		.join(enterMap);
}
