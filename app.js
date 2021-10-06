const photos = document.querySelectorAll(".photos");

const photoArray = Array.from(photos);
photoArray.forEach(photo => {
    photo.addEventListener('click',() => {
        removeActiveClasses()
        photo.classList.add("decreaseWidth");
    })
})

function removeActiveClasses(params) {
    photoArray.forEach(photo => {
        photo.classList.remove("decreaseWidth");
    })
    
}