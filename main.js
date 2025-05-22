const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.hamburger span').forEach(span => {
      span.removeAttribute('data-aos');
      span.removeAttribute('data-aos-duration');
      span.style.transform = '';
      span.style.opacity = '';
    });
  }, 1700);
});

function toggleMenu() {

  hamburger.classList.toggle('show');
  mobileMenu.classList.toggle('show');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.remove('show');
    document.getElementById('mobileMenu').classList.remove('show');
  });
});

setTimeout(()=>{
  const trdiv = document.getElementById("testing")
  //console.log(trdiv)
  recParse(trdiv);
}, 500);

function recParse(elem){
  //console.log(elem.tagName + " " + elem.id);
  if(elem.tagName == 'A' && elem.id == 'logo')
    elem.remove();
  let childrenElements = elem.querySelectorAll("*");

  if(elem.tagName == "SPLINE-VIEWER")
    childrenElements = elem.shadowRoot.querySelectorAll("*")

  childrenElements.forEach(function(child){
    recParse(child);
  });
}
