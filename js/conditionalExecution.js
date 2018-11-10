/**
 * If, Else, Else If
 */

let number = 0;
let msg;

if (number > 0) {
  msg = 'Positive';
} else if (number < 0) {
  msg = 'Negative';
} else {
  msg = 'Zero';
}

/**
 * Conditional ternary operator
 */

let age = 29;
let accessAllowed = (age > 18) ? true : false;

/**
 * Switch
 */

let hero = 'Green Lantern';

switch (hero) {
  case 'Batman':
    msg = `${hero} has a car`;
    break;
  case 'Wonder Woman':
    msg = `${hero} has an invisible airplane`;
    break;
  case 'Superman':
    msg = `${hero} can fly`;
    break;
  default:
    msg = `${hero} has to walk`;
    break;
}

function sizes(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      return 'Low';
    case 4:
    case 5:
    case 6:
      return 'Mid';
    case 7:
    case 8:
    case 9:
      return 'High';
    default:
      return val;
  } 
}
