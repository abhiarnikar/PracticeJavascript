for(let i=0;i<=3;i++){
    console.log(i)
}

for(let i=4;i>=0;i--){
  console.log(i)
}

for(i=2;i<=20;i+=2){
    console.log(i)
}

console.log('*************************')

for(let i=0;i<=50;i++){

    if(i%2 == 0){
        console.log('even No',i)
    }
    else{
        console.log('odd No',i)
    }
}

let k = 0
for(;k<=10;){
    console.log(k)
    k++
}

let a = 0
while(a<=5){
    console.log(a)
    a++
}

let b=10
while(b>=0){
    console.log(b)
    b-=2
}

let c= 0
while(c<=20){
    console.log(c)
    c+=2
}

let aa = 50
while(aa>=2){
    if(aa%2 == 0){
        console.log('even No',aa)
    }
    else{
        console.log('odd No',aa)
    }
    aa--
}

//Break and continue method by for loop

for(let i=0;i<=6;i++){
    if(i==3){
        break
    }
    console.log(i)
}

for(let i=0;i<=6;i++){
    if(i==3){
        continue
    }
    console.log(i)
}

let p = 0
while(p<=6){
    if(p==3){
        break
    }
    console.log(p)
    p++
}
console.log('************************')
let q = 0
while(q<=6){
    
    if(q==3){
        q++
        continue
    }
    console.log(q)
    q++
}