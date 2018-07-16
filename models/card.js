const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortId');

const GeneralSchema = {
	name:{
		type: Schema.Types.String,
		default:shortId.generate
	},
	content:{
		type: Schema.Types.String,
		default:''
	},
	createTime:{
		type:Schema.Types.Date,
		default:Date.now
	}
};

const GeneralModel = new Schema(GeneralSchema);

module.exports = mongoose.model('Card',GeneralModel);
