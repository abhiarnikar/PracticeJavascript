// let a =[1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<a.length;i++){
//     console.log(a[i]*2)
// }
function alpha(){
    setTimeout(()=>{
        console.log("first")
    },1000)

    setTimeout(()=>{
        console.log('second')
    })
}

alpha()