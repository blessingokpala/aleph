/* for type effect on hero section */
let i = 0;
let txt = "Web Development Services...";
let speed = 200;
function type(){
  document.getElementById("typeEffect").innerHTML
    +=txt.charAt(i);
  i++;
  setTimeout(type, speed);
}
type(); 

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navUl');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('change');
});

navUl.addEventListener('click', () => {
  navUl.classList.toggle('change');
});