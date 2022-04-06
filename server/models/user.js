const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    tasks : [
        {
            task : {
                type : String,
                required : true
            },
            completed : {
                type : Boolean,
                default : false
            }
        }
    ]
})
const User = mongoose.model('User',UserSchema)

module.exports = User