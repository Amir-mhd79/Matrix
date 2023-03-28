function matrix(){
    document.write(`<div class="edit-1">`)
    for(let i=1;i<=x;i++){
        for(let j=1;j<=x;j++){
            if(i===j){
                document.write(`<span class="edit-2">${j}</span>`)
            }else if(i<j){
                document.write(`<span class="edit-2">0</span>`)
            }else{
                document.write(`<span class="edit-2">${i*j}</span>`)
            }
        }
        document.write(`</br>`)
    }
    document.write(`</div>`)
}
let x=Number(prompt("Please Enter The Number"))
matrix(x)
