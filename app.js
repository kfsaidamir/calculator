function a() {
    var a,b,c,f,
    a = prompt('Выберите + - * /')
    b = +prompt('первая цифра')
    c = +prompt('вторая цифра') 
    d = +prompt('третья цифра')
    e = +prompt('четвертая цифра')
    if(a=='+'){
        f=Number(b+c+d+e)
    }else if(a=='-'){
        f=Number(b-c-d-e)
    }else if(a=='*'){
        f=Number(b*c*d*e)
    }else if(a=='/') {
        f=Number(b/c/d/e)
     } alert(`${b} ${a} ${c} ${a} ${d} ${a} ${e} = ${f}`)
}a()

