/*          
            JavaScript: Understanding the Weird Parts 
                       By: Anthony Alicea
                     Notes By: Peter Little
*/

/****************************************************************
*********************** EXECUTION CONTEXT ***********************
****************************************************************/

console.log('EXECUTION CONTEXT SECTION START')

console.log(this) 
console.log(window) //the same as "this"


/****************************************************************
**************************** HOISTING ***************************
****************************************************************/

console.log('HOISTING SECTION START')

/*---------------------HOISTING FUNCTIONS ---------------------*/

hoistedFunctionStatement() //will run properly because function is hoisted

function hoistedFunctionStatement() {
    console.log('Hoisted function statement called!')
}

/*---------------------HOISTING VARIABLES ---------------------*/

//hoistedFunctionExpression() WILL ERROR
// will have been alocated in memory but will have value of undefined

console.log(hoistedFunctionExpression)

var hoistedFunctionExpression = function() {
    console.log('Hoisted function expression called!')
}


/****************************************************************
**************************** COERSION ***************************
****************************************************************/

console.log('COERSION SECTION START')

if (1 == true) console.log('1 == true!')
if (0 == false) console.log('0 == false!')
if ("1" == true) console.log('"1" == true!')
if ("0" == false) console.log('"0" == false!')
if ("" == false) console.log('"" == false!')
if ([] == false) console.log('[] == false!')
if ([0] == false) console.log('[0] == false!')
if ([1] == true) console.log('[1] == true!')
if ("test" == true) console.log('"test" == true!') //does not coerse :(

/****************************************************************
*************************** COMPARISON **************************
****************************************************************/

console.log('COMPARISON SECTION START')

if (undefined == null) console.log('undefined == null!')
if (undefined != NaN) console.log('undefined != NaN!')
if (null != NaN) console.log('null != NaN!')
if (NaN != NaN) console.log('NaN != NAN!!!')


/****************************************************************
************************* IIFE EXAMPLE **************************
****************************************************************/

console.log('IIFE SECTION START')

var IIFEValue = 'outside IIFE';

(function() {
    var IIFEValue = 'inside IIFE'; //does not affect the outer value
    console.log('inside value is: ' + IIFEValue);
}());


//Value not changed
console.log('outside value is: ' + IIFEValue)

