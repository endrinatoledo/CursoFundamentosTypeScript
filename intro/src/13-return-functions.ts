(()=>{

  const calcTotal = (prices: number[]): string =>{
    let total = 0
    prices.forEach((item)=>{
      total += item
    })
    return total.toString()
  }

const prices = [1,2,3,4]

  const printTotal = (prices: number[]) =>{
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`)
  }

  printTotal(prices)
  // console.log(rta)
})();
