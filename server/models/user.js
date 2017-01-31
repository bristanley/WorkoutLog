//user model created using sequelize
//talks to the table user

module.exports=function(sequelize, DateTypes){
	var User = sequelize.define('user', {
		username: DateTypes.STRING,
		passwordhash: DateTypes.STRING
	});
		return User;
};

