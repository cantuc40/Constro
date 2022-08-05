const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }
});


//User model is initialized from the schema
const Company = mongoose.model("Company", companySchema);

//Export module
module.exports = Company;