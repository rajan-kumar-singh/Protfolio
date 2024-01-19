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
    text.textContent='mern stack developer'
},4000)

}
loadText();
// setInterval(textLoad,4000)
setInterval(loadText,5000)


// ======================================


 AOS.init();



 const email = document.querySelector('.emailInput');
 const submit = document.querySelector('.button');
 const error = document.querySelector('#error');
 
 const showError = () => {
  error.style.display = 'block';
  
};

 submit.addEventListener('click', (e) => {
     e.preventDefault();
     if (!email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
         return showError();
     }
     document.querySelector('#seccese').style.display = 'block';
    error.style.display = 'none';
   

 });


