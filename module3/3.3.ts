{
    // 
    // type guards
    // typeof --> type guard

    type Alphaneumeric = string | number;
    // const add = (param1: string | number, param2: string | number) =>
    const add = (param1: Alphaneumeric, param2: Alphaneumeric) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add("45", "50");
    console.log(result1);

    // in guard
    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        // user.  // gives --> only name(property)
        if ('role' in user) {
            // user.  // gives --> both name(property), age(property)
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Mr. Normal User"
    }
    const adminUser: AdminUser = {
        name: "Mr. Admin User",
        role: "admin"
    }
    getUser(normalUser)
    getUser(adminUser)
    // 
}