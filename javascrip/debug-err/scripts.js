function validaArray(arr, num){
  try{
    if(!arr  && !num)
      throw new ReferenceError("Faltou os parametros");
    
    if(typeof arr !== 'object')
      throw new TypeError("Arrey não é um objeto");
    
    if(typeof num !== 'number')
      throw new TypeError("Num não é um numero");
    
    if(arr.length !== num)
    throw new RangeError("O tamnho esta errado");
    

    return arr;

  }catch(e){
    if (e instanceof ReferenceError){
      console.log('esse erro é um ReferenceErro!' );
      console.log(e.message);
      
    }
    else if (e instanceof TypeError){
      console.log('esse erro é um TypeError!' );
      console.log(e.message);
      
    }else if (e instanceof RangeError){
      console.log('esse erro é um RangeError!' );
      console.log(e.message);
      
    }else {
      console.log('Tipo de erro não encontrado' + e);
    }
  }
  
}

validaArray([1,3,3],3);
