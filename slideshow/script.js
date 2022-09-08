let imgFuature = document.querySelector(".img-feature")
let listImg = document.querySelectorAll(".list-image img")
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

let currentIndex = 0; 
 function updateImageIndex(index){
   document.querySelectorAll('.list-image div').forEach(item =>{
    item.classList.remove('active')
   })


    currentIndex = index
    imgFuature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
 }



listImg.forEach((imgElement , index)=>{
    imgElement.addEventListener('click' , (e) =>{
      updateImageIndex(index)  
    } )
})


prevBtn.addEventListener('click', (e)=>{
   if(currentIndex == 0){
    currentIndex = listImg.length-1
   }else{
    currentIndex--
   }
   updateImageIndex(currentIndex)
})

nextBtn.addEventListener('click', (e)=>{
   if(currentIndex == listImg.length-1){
    currentIndex = 0
   }else{
    currentIndex++
   }
   updateImageIndex(currentIndex)
})


updateImageIndex(0);