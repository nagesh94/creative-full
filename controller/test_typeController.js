const Test_type=require('../model/test_type_Model')

exports.createTestType=async function(req,res,next){
    try {
        
        let data={test_type:req.body.test_type}
        const typeId=await Test_type.findOne().sort({_id:-1})
        console.log(typeId)
        if(!typeId || typeId.length==0){ 
          data=  {...data,type_id:1}
        
        }
        else{
            const flag=typeId.type_id+1
            data=  {...data,type_id:flag}
        }
        
        const result=await Test_type.create(data)
        res.status(200).json({
            status:"success",
            result
        })
    } catch (error) {
        res.json({status:"error", error})
    }

}

exports.getTestType=async function(req,res,next){
    try {
        
        const result = await Test_type.find({})
        res.status(200).json({
            status:"success",
            result
        })
    } catch (error) {
        res.json({status:"error", error})
    }
        
    }