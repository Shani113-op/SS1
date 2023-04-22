const footer = document.querySelector('.foot')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})