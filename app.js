
      //eng
// function a()  {
//     var a,b,c,d 
//     a = prompt(' Operators: +  -  *  /')
//     b = +prompt('First number')
//     c=  +prompt('Second number')

//     if(a=='+') {
//         d=Number(b)+Number(c) 
//     } else if (a=='-') {
//         d=Number(b)-Number(c)
//     }else if (a == '*') {
//         d=Number(b)*Number(c)
//     }else if (a == '/') {
//         d=Number(b)/Number(c)
//     }
//     alert(d)
// }
// a()

       //ru
function a() {
    var a,b,c,d,f,
    a = prompt('Выберите + - * /')
    b = +prompt('первая цифра')
    c = +prompt('вторая цифра')
    // d = +prompt('третья цифра')
    // e = +prompt('четвертая цифра')
    // if(b,c =='+') {
    //   z = alert(`${b}+${c}`)
    // }else if(b,c == '-') {
    // z = alert(`${b}-${c}`)
    // }else if(b,c == '*') {
    // z = alert(`${b}*${c}`)
    // }else if(b,c == '/'){
    // z = alert(`${b}/${c}`)
    // } alert(z) 

    if(a=='+'){
    f=Number(b)+Number(c)
    // f=Number(c)+Number(d)
    // f=Number(d)+Number(e)
    }else if(a=='-'){
        f=Number(b)-Number(c)
        // f=Number(c)-Number(d)
        // f=Number(d)-Number(e)
    }else if(a=='*'){
        f=Number(b)*Number(c)
        // f=Number(c)*Number(d)
        // f=Number(d)*Number(e)
    }else if(a=='/') {
        f=Number(b)/Number(c)
        // f=Number(c)/Number(d)
        // f=Number(d)/Number(e)
    }
    alert(`${b} ${a} ${c} = ${f}`)
    for (let i = 0; i < 12; i+= 1) {
        a = prompt('Выберите + - * /')
        b = +prompt('первая цифра')
        c = +prompt('вторая цифра')
        alert(`${b} ${a} ${c} = ${f}`)
 }
}
a()




