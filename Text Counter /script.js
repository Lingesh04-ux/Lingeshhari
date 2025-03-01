var textarea = document.getElementById("text-area")
var totalletter  = document.querySelector(".total-letter")
var remainletter = document.querySelector(".remain-letter")

textarea.addEventListener( "keyup" ,()=>{
    update()
})

function update()
{
    totalletter.innerText = textarea.value.length
    remainletter.innerText = textarea.getAttribute("maxLength") - textarea.value.length
}
