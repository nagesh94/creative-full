const Php_test=require('../model/php_test_mast_Model')
const Test_type=require('../model/test_type_Model')

exports.createTest=async function(req,res,next){
    try {
        const test=await Test_type.findOne({test_type:req.body.test_type})
        console.log(test)
        let data={
            test_name:req.body.test_name,
            test_type:test._id,
            tester_email_id:req.body.tester_email_id,
            tester_mobile_number:req.body.tester_mobile_number,
            tester_alternative_number:req.body.tester_alternative_number,

        }
        const testId=await Php_test.findOne().sort({_id:-1})
        console.log(testId)
        
        if(!testId || testId.length==0){ 
          data=  {...data,test_id:1}
        
        }
        else{
            const flag=testId.test_id+1
            data=  {...data,test_id:flag}
        }

        const result=await Php_test.create(data)
        res.status(200).json({
            status:"success",
            result
        })
    } catch (error) {

        res.json({status:"error",error})
    }

}
exports.getTestAll=async function(req,res,next){
    try {
        const result = await Php_test.find({})
        res.status(200).json({
            status:"success",
            result
        })
    } catch (error) {
        res.json({status:"error",error})
    }

}
exports.getSingleTest=async function(req,res,next){
    try {
        const id=req.params.id
        const result=await Php_test.findById(id)
        res.status(200).json({
            status:"success",
            result
        })
    } catch (error) {
        res.json({status:"error",error})
    }

}
exports.updateSingleTest=async function(req,res,next){
    try {
        const id=req.params.id
        const result=await Php_test.findByIdAndUpdate(id,req.body,{
            new:true,
        })
        res.status(200).json({
            status:"success",
            result
        })
    } catch (error) {
        res.json({status:"error",error})
    }

}
exports.deleteTest=async function(req,res,next){
    try {
        const id=req.params.id
        const result=await Php_test.findByIdAndDelete(id)
        res.status(202).json({
            status:"success",
            result
        })
    } catch (error) {
        res.json({status:"error",error})
    }

}