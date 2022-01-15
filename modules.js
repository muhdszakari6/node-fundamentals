console.log(arguments)
console.log(require('module').wrapper)

const Calc = require('./calculator')
const {add, multiply, divide} = require('./test-module')
const calc = new Calc()
console.log(calc.add(3,2))
console.log(multiply(3,2))


//caching 
const cached = require('./caching-example')()

require('./caching-example')()
require('./caching-example')()
require('./caching-example')()
require('./caching-example')()