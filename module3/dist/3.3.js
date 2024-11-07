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
    var result1 = add("45", "50");
    console.log(result1);
    var getUser = function (user) {
        // user.  // gives --> only name(property)
        if ('role' in user) {
            // user.  // gives --> both name(property), age(property)
            console.log("My name is ".concat(user.name, " and my role is ").concat(user.role));
        }
        else {
            console.log("My name is ".concat(user.name));
        }
    };
    var normalUser = {
        name: "Mr. Normal User"
    };
    var adminUser = {
        name: "Mr. Admin User",
        role: "admin"
    };
    getUser(normalUser);
    getUser(adminUser);
    // 
}
