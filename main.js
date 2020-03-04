/******************
 * YOUR CODE HERE *
 ******************/
const call = function(value){
  value()
}

const callTwice = function(thing){
  thing()
  thing()
}
const callXTimes = function(funcy,x){
  for(let i = 0; i < x; i++){
    funcy(x)
  }
}
const returnFromFunc = function(valueFromFunc){

return valueFromFunc()
}
  const modifyString = function(str, functi){
        return functi(str)
  }
  const modifyNumber = function(num , funct){
    return funct(num)

  }
const modifyAnything = function(anything, functions){
  return functions(anything)
}

const twoFuncs = function(funct1, funct2){
  return funct2(funct1())
}

const threeFuncs = function(fun1, fun2, fun3){
  return fun3(fun2(fun1()))
}
const twoValues = function(x,y, valuepls){
  return valuepls(x,y)
}
const twoValuesRTL = function(val1, val2 ,functionForVal){
  return functionForVal(val2, val1)
}

/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof call === 'undefined') {
  call = undefined;
}

if (typeof callTwice === 'undefined') {
  callTwice = undefined;
}

if (typeof callXTimes === 'undefined') {
  callXTimes = undefined;
}

if (typeof returnFromFunc === 'undefined') {
  returnFromFunc = undefined;
}

if (typeof modifyString === 'undefined') {
  modifyString = undefined;
}

if (typeof modifyNumber === 'undefined') {
  modifyNumber = undefined;
}

if (typeof modifyAnything === 'undefined') {
  modifyAnything = undefined;
}

if (typeof twoFuncs === 'undefined') {
  twoFuncs = undefined;
}

if (typeof threeFuncs === 'undefined') {
  threeFuncs = undefined;
}

if (typeof twoValues === 'undefined') {
  twoValues = undefined;
}

if (typeof twoValuesRTL === 'undefined') {
  twoValuesRTL = undefined;
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  threeFuncs,
  twoValues,
  twoValuesRTL,
}
