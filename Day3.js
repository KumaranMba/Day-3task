let obj1 = { name:"person1" ,age : 5};
let obj2 = {age : 5, name:"person1"};

let object1 = Object.keys(obj1).sort();
let object2 = Object.keys(obj2).sort();

function compareobjects(){
  if(Object.keys(object1).length !== Object.keys(object2).length){ 
 return false;
  }
  for(let dinesh in object1){
    if(!object2.hasOwnProperty(dinesh) || object1[dinesh]!== object2[dinesh]){
      return false;
    }
    return true;
       
  }
}
    
console.log(compareobjects());