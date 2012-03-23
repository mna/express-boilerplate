var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ModelSchema = new Schema({
	someStringData: {type: String, required: true, index: true},
	someDateData: {type: Date},
	somePositiveNumberData: {type: Number, min: 0}
});

// Define some "static" or "instance" methods
ModelSchema.statics.getAll = function (cb) {
	this.find({}, cb);
};

// Export the model
module.exports = mongoose.model('Model', ModelSchema);
