function calculateDistance(userLon, userLat, taxiLon, taxiLat){
	return Math.sqrt(Math.pow((userLon-taxiLon)/360*40000,2)+Math.pow((userLat-taxiLat)/360*40000,2));
}

console.log(calculateDistance(103.665646, 1.252875, 103.67958, 1.34709));
console.log(calculateDistance(103.679384, 1.342022, 103.687089, 1.343828));
