module.exports=function reverse (n) {
    let positiv=Math.abs(n).toString();
    let result=''
  // let localValue=Math.abs(n)
  //  let result=localValue.toString().split('').reverse().join('')
  //  return result
    for (let i=positiv.length-1;i>=0;i--){
        result+=positiv[i]
    }
    return result
}

