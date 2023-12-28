function keypressed(){
    let charlimit = 200
    let text = document.querySelector('textarea')
    let char = document.querySelector('.charcount')
    char.innerHTML = String(text.value).length
    let word = document.querySelector('.wordcount')
    word.innerHTML = (String(text.value).split(' ')).length-1;
    if(text.value.length > 200){
        text.value = String(text.value).substring(0,charlimit)
    }
    let charleft = document.querySelector('.charleft')
    charleft.innerHTML = 200 - String(text.value).length
    
}

document.querySelector('.clearbutton').addEventListener('click',()=>{
    document.querySelector('textarea').value = ''
    let char = document.querySelector('.charcount').innerHTML = 0
    let word = document.querySelector('.wordcount').innerHTML = 0
    let charleft = document.querySelector('.charleft').innerHTML = 200
})
