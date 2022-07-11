const numbers : ReadonlyArray<number> = [1,2,3,4,5,6]

// no permite modificar ele arreglo sino que lo trabaja como solo lectura

// numbers.unshift(3)
// numbers.push(2)
// numbers.pop()

// crean un array nuevo sin modificar el original
// pero si permite cambiar los valores internos del array
numbers.map(()=>0)
numbers.reduce(()=>0)
numbers.filter(()=>{})
