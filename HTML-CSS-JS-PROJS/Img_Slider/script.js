images = document.querySelectorAll('.slides img');


let currentIndex = 0;
function nextImg(){
    images[currentIndex].classList.remove('active');
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
}
function prevImg(){
    images[currentIndex].classList.remove('active');
    currentIndex--
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    images[currentIndex].classList.add('active');
}