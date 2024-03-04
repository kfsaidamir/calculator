function a() {
    var a,b,c,d,f,
    a = prompt('Выберите + - * /')
    b = +prompt('первая цифра')
    c = +prompt('вторая цифра')
    if(a=='+'){
    f=Number(b)+Number(c)
    }else if(a=='-'){
        f=Number(b)-Number(c)
    }else if(a=='*'){
        f=Number(b)*Number(c)
    }else if(a=='/') {
        f=Number(b)/Number(c)
    }
    alert(`${b} ${a} ${c} = ${f}`)
}a()

