let array= [4,7,9,45,78,3,1]
let minVal = array[0];
let maxVal;


for(let el of array){


if(el> minVal){
  
  maxVal=el;
}
else if(maxVal >el){
    minVal= el;
}
}

console.log(`Pi piti eleman se ${minVal} \n Pigran eleman se ${maxVal}`)