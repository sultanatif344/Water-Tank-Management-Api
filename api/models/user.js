const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    userType:{type:String, required:true},
    authorizations:{
        waterLevel:{type:Boolean}, 
        waterStatus:{type:Boolean},
        addATank:{type:Boolean},
        tankList:{type:Boolean},
        motorStatus:{type:Boolean},
        adminPanel:{type:Boolean}
    }

})

module.exports = mongoose.model('User',userSchema);