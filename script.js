"use strict";
let a = [1, 2, 3, 4];
let b = a;
b.pop();
console.log(a);
/*
    here at first a = [1,2,3,4]
    we are popping out from b
    now b = [1,2,3]
    but also a = [1,2,3]
*/ 
