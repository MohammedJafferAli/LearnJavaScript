//Object is collection of properties

let person = {

    firstname: 'Tim',
    lastname : 'cook',
    Age : 28,
    isEligible : true

}

console.log(person.firstname)//object.propertykey
console.log(person['lastname']) //Array notation

//Change the property at runtime

person.firstname = 'john'
console.log(person.firstname)

//Add property at runtime
person.gender = 'Male' //if doesn't exist then create

console.log(person)

//delte any property from the object

delete person.gender 
console.log(person)

//property exist in the object syntax 'Key' in 'Object'
console.log('gender' in person)

//Iterate through the person object
for(let Key in person)
{
    person[Key]
}