"use strict";
// Union
// Enums
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS || (DIRECTIONS = {}));
let userId = 1;
userId = "1";
const user = { id: userId, name: "Lean" };
console.log("typeof(user.id): ", typeof user.id);
let pair = [3, "hi"];
const getProduct = (name) => ({ id: 123, name });
