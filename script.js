const navbar = document.querySelector('.nav-bar');
const toggleButton = document.querySelector('.toggle-button');


toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ====================text-Animation==========
const text=document.querySelector('.sec-text');
const loadText = () => {
    setTimeout(()=>{
    text.textContent='Rajan Kumar Singh'
},0)
setTimeout(()=>{
    text.textContent='Front End Developer'
},4000)

}
loadText();
// setInterval(textLoad,4000)
setInterval(loadText,4000)


// ======================================

// const ui=document.querySelector('.first-serverc')
// const hover=document.querySelector('.servec-hover')

// hover.addEventListener('mouseover',()=>{
//     document.querySelector('.servec-hover').style.display = 'none';
// })
// ui.addEventListener("mouseout",()=>{
//     hover.style.display = 'black';
// })

 AOS.init();