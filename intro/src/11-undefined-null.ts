(()=>{

  // let myNumber : number = undefined
  // let myString : string = undefined

  let myNumber : number | null = null
  myNumber=12

  let myString : string | undefined = undefined
  myString='jhasd'

  function hi(name: string | null){
    let hello = 'hola '
    if(name){
      hello += 'name';
    }else{
      hello += 'nobody'
    }
    console.log(hello)
  }

  hi('asdjhgbjkas')
  hi(null)

  function hiv2(name: string | null){
    let hello2 = 'hola '
    hello2 += name?.toLowerCase() || 'nobody2'

    console.log(hello2)
  }

  hiv2('sdf')
  hiv2(null)

})();
