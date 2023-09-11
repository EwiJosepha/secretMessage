let executeTask=document.getElementById('execute-task')
let normalizeRec=document.getElementById('normalize-rec')
let encodedToChunks=document.getElementById('encoded-chunks')
let recForEncoded=document.getElementById('rec-for-encoded')


let input
let toLower
let restrictCharacters


function trimming () {
input=document.getElementById('input').value
let restrictSymbols= input.replace(/[^a-zA-Z]/g, '')
  console.log(restrictSymbols)
  toLower=restrictSymbols.toLowerCase()
  console.log(toLower)
  restrictCharacters= toLower.length
  console.log(restrictCharacters)
  if(restrictCharacters < 5){
    normalizeRec.innerHTML=("invalid message, type at least 50 characters")
    console.log(restrictCharacters)
 }else{
  normalizeRec.innerHTML=toLower
  console.log(toLower)
}
}



function rolsncols () {
  const cols = Math.floor(Math.sqrt(restrictCharacters));
const rows = Math.ceil(restrictCharacters / cols);
console.log(cols)
console.log(rows)
}
 
// let pushh=[]
// function shapesentence () {
//   for(let i= 0; i<=restrictCharacters; i++){
//     for(let j=0; j<restrictCharacters; j++){
//       if(i + j  === 4 ){
//         console.log(restrictCharacters)
//       }else{
//         console.log('*')
//       }
//     }
//   }
// }

executeTask.addEventListener('click' , ()=>{
  trimming()
  rolsncols()
} )


