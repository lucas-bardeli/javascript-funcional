
function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (n, m) => console.log(n - m)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const resultado = exec(subtrair, 50, 25)
console.log(resultado)

const cb = () => console.log('Executando') 
setInterval(cb, 1000)

// setInterval(() => console.log('Executando 2'), 1000)

// setInterval(function () {
//     console.log('Executando 3')
// } , 1000)