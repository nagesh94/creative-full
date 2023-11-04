const express=require('express')
const { createTestType, getTestType } = require('../controller/test_typeController')

const router=express.Router()

router
.route('/')
.post(createTestType)
.get(getTestType)



module.exports = router