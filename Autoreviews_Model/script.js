const testimonials = [
  {
    name : "- Anderson",
    photoUrl : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJldmlldyUyMHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    text: "I can always rely on Apple for top-notch laptops that are sleek, powerful, and reliable. Their attention to detail and innovation sets them apart in the tech industry."
  },

  {
    name : "- Johnson",
    photoUrl : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHJldmlldyUyMHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfDF8MHx8fDI%3D",
    text: " Apple's mobiles are innovative and user-friendly, making them the top choice for tech-savvy consumers. The sleek design and cutting-edge features set them apart from the competition."
  },
  
  {
    name : "- Thompson",
    photoUrl : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmV2aWV3JTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8MXwwfHx8Mg%3D%3D",
    text: "I am extremely satisfied with the laptops I purchased from apple. The sleek design and impressive performance exceeded my expectations."
  },
]

var image = document.querySelector("img")
var textbox  = document.querySelector(".textbox")
var author = document.querySelector(".author")

var idx = 0

updatetestimonals()

function updatetestimonals (){
  const {name, photoUrl, text} = testimonials[idx]
  image.src = photoUrl
  textbox.innerText  = text
  author.innerText = name
  idx++
  if (idx === testimonials.length)
  {
    idx = 0
  }

  setTimeout(() => {
    updatetestimonals()
  }, 2000);
}
