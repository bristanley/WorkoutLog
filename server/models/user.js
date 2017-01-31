//user model created using sequelize
//talks to the table user

var Sequelize = require('sequelize');

module.exports=function(sequelize, DateTypes){
	return sequelize.define('user', {
		username: DateTypes.STRING,
		passwordhash: DateTypes.STRING
	});
};

