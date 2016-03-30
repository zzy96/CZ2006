function calculateDistance(userLon, userLat, taxiLon, taxiLat){
	return Math.sqrt(((userLon-taxiLon)/360*40000)^2+((userLat-taxiLat)/180*40000)^2);
}

console.log(calculateDistance(103.819836, 1.362083, 103.687089, 1.343828));