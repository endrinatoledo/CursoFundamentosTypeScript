let anyVar : any
anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = []
anyVar = {}

let isNew: boolean = anyVar

anyVar.doSomething()
anyVar.toUpperCase()

let unknowVar : unknown

unknowVar = true
unknowVar = undefined
unknowVar = null
unknowVar = 1
unknowVar = []
unknowVar = {}

//No permite ejecutar acciones si no sabe cual es el tipo
//unknowVar.doSomething()
//unknowVar.touppercase()

if(typeof unknowVar === 'string'){
  unknowVar.toUpperCase()
}

const parse = (str: string) : unknown => {
  return JSON.parse(str)
}
