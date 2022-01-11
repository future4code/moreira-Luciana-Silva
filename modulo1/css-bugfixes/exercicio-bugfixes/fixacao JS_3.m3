```
function calculaNota(ex, p1, p2){
  let mediaEscolar = ((ex*1)+ (p1*2) +(p2*3)) / 6
  if(mediaEscolar >= 9){
    return "A"
  }else if (mediaEscolar < 9 && mediaEscolar >= 7.5){
    return "B"
  }else if (mediaEscolar < 7.5 && mediaEscolar >= 6){
    return "C"
  }else{
    return "D"
  } 
    } 
```