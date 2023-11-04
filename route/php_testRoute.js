const express=require('express')
const { createTest, getTestAll,getSingleTest, updateSingleTest, deleteTest } = require('../controller/php_test_mastController')

const router=express.Router()

router
.route('/')
.post(createTest)
.get(getTestAll)

router
.route('/:id')
.get(getSingleTest)
.put(updateSingleTest)
.delete(deleteTest)

module.exports = router