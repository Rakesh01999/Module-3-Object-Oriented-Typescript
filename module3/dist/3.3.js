"use strict";
{
    // const add = (param1: string | number, param2: string | number) =>
    var add = function (param1, param2) {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    var result = add(45, 5);
    console.log(result);
    // 
}
