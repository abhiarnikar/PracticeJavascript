let array = new Set([11,25,14,11,25,63,78,25,63])
console.log(array)

// set does not store the value by index and 
// does not store the double value

let names= new Set('abhijitaa') // does not store the double value
console.log(names)

let persons = new Set()
console.log(persons)

//adding the properies

persons.add('abhijit')
persons.add('vishwa')
persons.add('krushna')
persons.add('kaivaly')
persons.add('krushna')

console.log(persons)

console.log(persons.has('abhijit'))
console.log(persons.has('krushna'))

console.log(persons.size)

persons.delete('abhijit')
console.log(persons)

persons.clear()

console.log(persons)

