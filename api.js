var request = require('request');
var requestOptions;
var finish = false;
var taxis = [];
var i = 0;

while (i<500 && !finish){
	requestOptions = {
		url: "http://datamall2.mytransport.sg/ltaodataservice/TaxiAvailability?$skip="+i,
		headers:  { 'AccountKey' : 'HerxddpjOWwwCWuan3jxQw==',
			'UniqueUserID' : 'a8770653-13ba-463b-be96-56ad92e7cc69',
			'accept' : 'application/json'},
		method: 'GET',
		json:{}
	};
	request(requestOptions, function(err, response, body){
		if (err){
			console.log(err);
		}else if (response.statusCode === 200){
			for (var i=0;i<body.value.length;i++){
				taxis.push(body.value[i]);
			}
			console.log(taxis.length);
			if (body.value.length === 0){
				finish = true;
			}
		}else{
			console.log(response.statusCode);
		}
	});

	i+=50;

}

