/* ---------- Smooth scroll buttons ---------- */
document.querySelectorAll('.js-scroll').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(btn.dataset.target).scrollIntoView({behavior:'smooth'});
  });
});

/* ---------- Navbar solidifies on scroll ---------- */
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>50));

/* ---------- Fade-up reveal for .js-reveal elems ---------- */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('reveal--visible');
      io.unobserve(e.target);
    }
  });
},{threshold:.25});
document.querySelectorAll('.js-reveal').forEach(el=>io.observe(el));
