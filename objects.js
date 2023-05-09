// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

// const obj:keywords used to create an object in your program
// {} - curly brackets are used to define the object
// name: Isaac - name is considered a key property of the object, whereas "Isaac" is considered a value of the key withing the object

//================================================================================
{
    const me = { // 1. Create an empty object called me.
        firstName: "Isaac",
        lastName: "Asher", // 2. Assign it properties for firstName, lastName, age, and email with corresponding values.
        age: 26,
        email: "isaac.asher97@gmail.com",
    }
    let newMe = { // 4. Without writing directly into the object, update the value of age to be 1000 years old.
        me,
        age: 1000,
        "place of residence": "Brooklyn, Ny", // 6. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
    }
    console.log(me.firstName); // 3. Using dot notation, access the firstName property in your object.
    console.log(newMe.age); // 5. Using dot notation, verify that age has been updated.
    console.log(newMe["place of residence"]); // Access the value of "place of residence"
    console.log(me) // returns => {firstName: "Isaac", lastName: "Asher",  age: 26, email: "isaac.asher97@gmail.com"}
}