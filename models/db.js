module.exports = {
	addDriver: function(username, password, name, phone){
		var drivers = require("./drivers");
		drivers.push({"username":username,"password":password,"name":name,"phone":phone});
		var fs = require("fs");
		fs.writeFile("./drivers.json", JSON.stringify(drivers), function(error){
	    	if(error) { 
	      		console.log(error);
	    	} 
		});
	},
	delDriver: function(){
	},
	addTaxiCompany: function(){
	},
	delTaxiCompany: function(){
	},
	getDriverInfo: function(){
		return require("./drivers");
	},
	getTaxiCompanyInfo: function(){
		return require("./taxiCompanys");
	}
}