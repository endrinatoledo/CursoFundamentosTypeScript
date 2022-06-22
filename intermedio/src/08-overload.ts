function parseStr(input: string | string[]) : string | string[]{
  if (Array.isArray(input)){
    return input.join('')
  }else{
    return input.split('')
  }
}

const rtaArray = parseStr('Endrina')

if (Array.isArray(rtaArray)){
  rtaArray.reverse()
}

console.log('rtaArray',rtaArray)
const rtaArray2 = parseStr(['E','n','d','r','i','n','a'])
console.log('rtaArray2',rtaArray2)
