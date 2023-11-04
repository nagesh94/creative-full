const mongoose = require('mongoose')

const test_typeSchema=new mongoose.Schema({
    type_id:Number,
    test_type:{
        type:String,
        required:[true,'test_type is required']
    }
})

module.exports = mongoose.model("Test_type", test_typeSchema)