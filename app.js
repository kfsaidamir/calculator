

// function overal(a,b,c,d) {
//     var a,b,c,d
//     a = prompt('select + - / *')
//     b = prompt('first number')
//     c = prompt('second number')
//     d = prompt()

//     if(a=="+") {
//         Number(b)+Number(c)
//     } else if (a=="-") {
//         Number(b)-Number(c)
//     }else if (a=="*") {
//         Number(b)*Number(c)
//     }else if (a=="/") {
//         Number(b)/Number(c)
//     }
// }
// overal(a,b,c,d)

// const a = prompt('Whats your name?')
// const b = +prompt('How old are you?')
// const c = prompt('Who are you in your life?')

// const obj = {
//     name:a,
//     age:b,
//     job:c,
// }

// console.log(obj)
a()
function a()  {
    var a,b,c,d
    a = prompt(' Operators: +  -  *  /')
    b = +prompt('write first number')
    c=  +prompt('write second number')

    if(a=='+') {
        d=Number(b)+Number(c)
    } else if (a=='-') {
        d=Number(b)-Number(c)
    }else if (a == '*') {
        d=Number(b)*Number(c)
    }else if (a == '/') {
        d=Number(b)/Number(c)
    }
    alert(d)
}





