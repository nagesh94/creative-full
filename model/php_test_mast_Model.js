const mongoose = require('mongoose')
const validator=require('validator')

const Php_test_mastSchema=new mongoose.Schema({
    test_id:Number,
    test_name:{
        type:String,
        required:[true,'test_name is required'],
    },
    test_type:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Test_type'
    },
    tester_email_id:{
        type:String,
       
        required:[true,"email is required"],
        lowercase:true,
        validate:[validator.isEmail,"please provide valid email"]
    },
    tester_mobile_number:{
        type:String
    },
    tester_alternative_number:{
        type:String
    },
    creation_data:{
        type:Date,
        default:Date.now()
    },
    last_updataion_data:{
        type:Date,
    }
})

Php_test_mastSchema.pre(/^find/,async function(next){
    this.populate({
        path:'test_type'
    })
    next()
})

module.exports=mongoose.model("Php_test",Php_test_mastSchema);