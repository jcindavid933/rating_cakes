const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

var CakeSchema = new mongoose.Schema({
 baker_name: {type: String, required: true, minlength: 2},
 image_url: {type: String, required: true},
 rating: [{type: Number, default: '', required: true}],
 comment: [{type: String, default: '', required: true}]
}, {timestamps: {created_at: 'created_at', updated_at: 'updated_at'}});

mongoose.model('Cake', CakeSchema);

module.exports = mongoose.model('Cake');
