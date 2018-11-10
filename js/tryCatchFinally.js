try {
  consol.log('hi');
} catch (error) {
  const msg = `${error.name}: ${error.message}`;
  console.log(msg);
}

/**
 * Produce custom actions when an error occurs
 */

try {
  consol.log('hi');
} catch (error) {
  console.log('Sorry, something went wrong.');
}

/**
 * Throw an error
 */

try {
  throw new Error('Yeah... Sorry');
  // throw new SyntaxError('Yeah... Sorry');
  // throw new TypeError('Yeah... Sorry');
}
catch(error) {
  const msg = `${error.name}: ${error.message}`;
  console.log(msg);
}

/**
 * finally
 */

try {
  function returnEight() {
    return 9;
  }

  const eight = returnEight();

  if (eight !== 8){
    throw new Error('Oops, something went wrong');
  } else {
    console.log(eight);
  }
}
catch(error) {
  console.log(error.message);
}
finally {
  console.log('Thanks for playing!');
}
