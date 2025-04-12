// Criar uma função chamada range
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

function range(i, f, p = 1) {

    const n1 = f === undefined ? 1 : i
    const n2 = f === undefined ? i : f
    const passo = n1 <= n2 ? Math.abs(p) : -Math.abs(p)

    const nums = []

    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += passo) {
        nums.push(i)
    }
    return nums
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))