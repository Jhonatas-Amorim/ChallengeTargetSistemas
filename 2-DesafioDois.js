let list = [0,1];
let num = 0;

function verNum(userNum){
   for(let i = 0; i < userNum; i++){
    num = list[i] + list[i+1];
    list.push(num);
    if(num === userNum){
        console.log(`O numero ${userNum} pertence a lista.`)
    }
   }
   console.log(`O numero ${userNum} não pertence a lista.`)   
}

console.log(verNum(7))