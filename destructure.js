let names = ["krushna","ram","vishwa","kaivaly"]

let a = names[0]
let b = names[1]
let c = names[2]
let d = names[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let [aa,bb,cc,dd]=names
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

let nums = [[11,22,33],[44,55,66],[77,88,99]]
let abc = nums.flat()
console.log(abc)

let [[a1,a2,a3],[b1,b2,b3],[c1,c2,c3]] = nums
console.log(c3)
console.log(b2)

let person={
    firstName:"abhijit",
    age:27,
    city:"pune"
}

let{firstName,age,city}=person

console.log(firstName)
console.log(age)
console.log(city)

let {firstName:fn,age:ag,city:ct}=person
console.log(fn)
console.log(ag)
console.log(ct)

let student={
    fullName:"krushna arnikar",
    age:04,
    city:"pune",
    skills:["javascript","python"]
}

let{fullName:FN,age:AG,city:CT,skills:[pp,qq]}=student

console.log(FN)
console.log(pp)
console.log(AG)