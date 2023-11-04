const express = require('express')
const cors=require('cors')

const test_route=require('./route/test_typeRoute')
const php_test=require('./route/php_testRoute')



const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/testtype',test_route)
app.use('/api/v1/phptest',php_test)



module.exports =app