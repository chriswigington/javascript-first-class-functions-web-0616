function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function aFunction() { 
    console.log('blah')
  }
}

function returnsAnAnonymousFunction() {
  return () => console.log('blah');
}