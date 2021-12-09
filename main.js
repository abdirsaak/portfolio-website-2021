
const texts = ['Frontend Developer'];
let count=0;
let index = 0;

let currenText = '';
let letter = '';

(function type(){
if(count === texts.length){
    count= 0;
}
currenText = texts[count];
letter = currenText.slice(0, ++index);

document.querySelector('.typwroter').textContent = letter;
if(letter.length === currenText.length){
    count++;
    index = 0;
}

setTimeout(type, 400);

}());


const btn =  document.querySelector('#burger')
const navul = document.querySelector('#navul')
btn.addEventListener('click', () => {
    navul.classList.toggle('show')
})




// .............................videos
const seenAll = document.querySelector('#all');
const seenWeb = document.querySelector('#web');
const seenvideos = document.querySelector('#vieos');



const allItus = document.querySelector('#allItus');
seenAll.addEventListener('click', () => {
    allItus.style.display = "block"
    itusAllVideos.style.display = "block"
})


const itusWebdeveloper = document.querySelector('#itusWebdeveloper')
const itusAllVideos = document.querySelector('#itusAllVideos')

seenWeb.addEventListener('click', () => {
itusWebdeveloper.style.display = "block"
itusAllVideos.style.display = "none"
})



seenvideos.addEventListener('click', () => {
    itusAllVideos.style.display = "block";
    itusWebdeveloper.style.display = "none"
})
