let info ={
    firstName:"abhijit",
    lastName:"arnikar",
    age:30,
    skills:["javascript","cypress"]
}

//there are two ways to operate the objects dot notation and bracket notation

console.log(info)

// Retrive
console.log(info.firstName)
console.log(info["lastName"])

//update

info["firstName"]="vishwajeet"
console.log(info)
info.age=29
console.log(info)

//create/add

info["language"]="marathi"
info.city="pune"
console.log(info)

// delete

delete info["language"]
delete info.city
console.log(info)

let names =["abhi","ram","krushna","kaivaly"]

for(let i=0;i<names.length;i++){
    console.log(names[i])
}

for(let i=3;i>=0;i--){
    console.log(names[i])
}

let student={
    firstName:"krushna",
    lastName:"arnikar"
}

for(let key in student){
    console.log(key,student[key])
}

console.log("************************************")

let students= [
    {
        firstName:"abhijit",
        lastName:"arnikar",
        skills:['css','html']
    },
    {
        firstName:"krushna",
        lastName:"arnikar",
        skills:['java','selenuim']
    },
    {
        firstName:"kaivaly",
        lastName:"arnikar",
        skills:['c++','html']
    }

]

for(let i=0;i<students.length;i++){
    let obj = students[i]
    for(let key in obj){
        console.log(key,obj[key])
    }
}