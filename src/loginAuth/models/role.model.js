const mongoose = require('mongoose');
const Schema = mongoose.Schema;;

//User Schema
const roleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});


//User model is initialized from the schema
const Role = mongoose.model("Role", roleSchema);

//Export module
module.exports = Role;