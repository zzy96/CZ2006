var db = require('../models/db');
var request = require('request');
var requestOptions;
var finish = false;
var taxis = [];
var userlocs = [];
var i = 0;


function getTaxiInfo(){
	while (i<10000 && !finish){
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
}



function findNearbyUsers(){
	user1 = {Latitude:1.343828, Longitude:103.687089};
	user2 = {Latitude:1.342022, Longitude:103.679384};
	user3 = {Latitude:1.348734, Longitude:103.681817};
	user4 = {Latitude:1.344225, Longitude:103.691426};
	user5 = {Latitude:1.344303, Longitude:103.689853};
	user6 = {Latitude:1.346968, Longitude:103.690381};
	user7 = {Latitude:1.342580, Longitude:103.688364};
	user8 = {Latitude:1.340973, Longitude:103.686920};
	userlocs.push(user1);
	userlocs.push(user2);
	userlocs.push(user3);
	userlocs.push(user4);
	userlocs.push(user5);
	userlocs.push(user6);
	userlocs.push(user7);
	userlocs.push(user8);
}

module.exports = {
	index: function(req, res, next) {
		getTaxiInfo();
		res.render('GeneralUI', { title: 'TaxiME', taxis: taxis, taxiCompany: db.getTaxiCompanyInfo()});
	},
	driver: function(req, res, next) {
		findNearbyUsers();
		res.render('DriverUI', { title: 'TaxiME', username:req.user.username, userlocs: userlocs, history: db.getHistory()});
	},
	admin: function(req, res, next) {
		res.render('AdminUI', { title: 'TaxiME', drivers: db.getDriverInfo(), taxiCompanys: db.getTaxiCompanyInfo()});
	},
	login: function(req, res, next) {
		res.render('LoginUI', { title: 'TaxiME'});
	},
	add: function(req, res, next){
		if (req.body.type=="driver"){
			db.addDriver(req.body.username, req.body.password, req.body.name, req.body.phone);
		}
		if (req.body.type=="taxic"){
			db.addTaxiCompany(req.body.name, req.body.address, req.body.email, req.body.phone);
		}
		res.redirect('back');
	}
}
