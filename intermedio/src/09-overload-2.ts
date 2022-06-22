//se ahorra validar el tipo de parametro que viene entrando
export function parseStr(input: string ) : string[];
export function parseStr(input: string[] ) : string;

export function parseStr(input: number ) : boolean;

//export function parseStr(input: string | string[]) : string | string[]{
//  if (Array.isArray(input)){
//    return input.join('')
//  }else{
//    return input.split('')
//  }
//}
export function parseStr(input: unknown) : unknown{
  if (Array.isArray(input)){
    return input.join('')
  }else
  if(typeof input === 'string'){
    return input.split('')
  }else
  if(typeof input === 'number'){
    return true
  }
}
const rtaArray = parseStr('Endrina')

rtaArray.reverse()

console.log('rtaArray',rtaArray)
const rtaArray2 = parseStr(['E','n','d','r','i','n','a'])
rtaArray2.toLowerCase()
console.log('rtaArray2',rtaArray2)

const rtaArray3 = parseStr(123)
console.log('rtaArray3',rtaArray3)
