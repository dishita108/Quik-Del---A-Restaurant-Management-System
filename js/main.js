const btn = document.getElementsByClassName('button-area')

for(var i=0;i<btn.length;i++){
    let cartBtn = btn[i]
    cartBtn.addEventListener('click',()=>{
        console.log('hi')
    })
}