
module.exports = function(sequelize, DataTypes) {
	//With define, the first argument is going to  represent a column in the db table
		return sequelize.define('definition', {
			description: DataTypes.STRING,
			logType: DataTypes.STRING, /*by timee, reps, weight,....*/
			owner: DataTypes.INTEGER
		},{
		});
};