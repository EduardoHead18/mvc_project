//modelo de la db
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    tarea:{ type: String },
});
module.exports = User = mongoose.model('User',UserSchema);