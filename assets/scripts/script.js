let executeTask=document.getElementById('execute-task')
let normalizeRec=document.getElementById('normalize-rec')
let encodedToChunks=document.getElementById('encoded-chunks')
let recForEncoded=document.getElementById('rec-for-encoded')

let input
let toLower
function trimming () {
input=document.getElementById('input').value

  let restrictSymbols= input.replace(/[^a-zA-Z]/g, '');
  toLower=restrictSymbols.toLowerCase()
  // console.log(toLower)
  let restrictCharacters= toLower.length;
  if(restrictCharacters < 50){
    normalizeRec.innerHTML=("invalid message, type at least 50 characters")
 }else(normalizeRec.innerHTML=toLower)
}



// toLower.length
// console.log(toLower)

function loopingColsRows () {
  // let cols=math.ceil(length)
let rows=Math.ceil(length)
let cypher=" "
  
  // encodedToChunks.innerHTML=toLower.length
  
  for(let i=0; i < rows; i++){
    for(let j=1; j<toLower.length; j+=rows){
      if(i==j+1 && j==i+1){
        cypher+= toLower[j]
      }
    }
    toLower += "\n"
  }
  console.log(toLower)
}



executeTask.addEventListener('click' , ()=>{
  trimming()
  loopingColsRows ()
} )


