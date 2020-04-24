import React, {Component} from "react";

function uniqueId() {
  var combinedNumbers = "";
    for (var i = 0; i <= 4; i++){
       var fiveDigit = Math.floor(Math.random() * 99999) + 1;
       combinedNumbers = combinedNumbers + fiveDigit;
    } 
  return combinedNumbers;
}


export default uniqueId;