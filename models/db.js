module.exports = {
	addDriver: function(username, password, name, phone){
		var drivers = require("./drivers");
		drivers.push({"username":username,"password":password,"name":name,"phone":phone});
		var fs = require("fs");
		fs.writeFile("./models/drivers.json", JSON.stringify(drivers), function(error){
	    	if(error) { 
	      		console.log(error);
	    	} 
		});
	},
	delDriver: function(){
	},
	addTaxiCompany: function(name, address, email, phone){
		var taxiCompanys = require("./taxiCompanys");
		taxiCompanys.push({"name":name,"address":address,"email":email,"phone":phone});
		var fs = require("fs");
		fs.writeFile("./models/taxiCompanys.json", JSON.stringify(taxiCompanys), function(error){
	    	if(error) { 
	      		console.log(error);
	    	} 
		});
	},
	delTaxiCompany: function(){
	},
	getDriverInfo: function(){
		return require("./drivers");
	},
	getTaxiCompanyInfo: function(){
		return require("./taxiCompanys");
	},

	addHistory: function(latitude, longitude){

	},
	getHistory: function(){
		return require("./history");
	}
}