const geoAlbers = d3.geoAlbersUsa();

const pathGenerator = d3.geoPath().projection(geoAlbers);

prepData().then(resultCounties => {
	prepMap(resultCounties);
});
