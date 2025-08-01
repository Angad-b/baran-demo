// Drag and Drop for Make Your Own Box
window.addEventListener('DOMContentLoaded', function() {
  var draggables = document.querySelectorAll('.draggable-item');
  var dropBox = document.getElementById('drop-box');
  var boxPlaceholder = document.getElementById('box-placeholder');
  draggables.forEach(function(item) {
    item.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/plain', JSON.stringify({
        name: item.dataset.name,
        img: item.dataset.img
      }));
    });
  });
  if (dropBox) {
    dropBox.addEventListener('dragover', function(e) {
      e.preventDefault();
      dropBox.style.borderColor = '#F7C8D8';
    });
    dropBox.addEventListener('dragleave', function(e) {
      dropBox.style.borderColor = '#d2aa8d';
    });
    dropBox.addEventListener('drop', function(e) {
      e.preventDefault();
      dropBox.style.borderColor = '#d2aa8d';
      var data = JSON.parse(e.dataTransfer.getData('text/plain'));
      // Remove placeholder if present
      if (boxPlaceholder) boxPlaceholder.style.display = 'none';
      // Add item to box
      var el = document.createElement('div');
      el.style.display = 'flex';
      el.style.flexDirection = 'column';
      el.style.alignItems = 'center';
      el.style.margin = '0.2rem';
      el.innerHTML = '<img src="' + data.img + '" alt="' + data.name + '" style="width:40px; height:40px; object-fit:cover; border-radius:10px; margin-bottom:2px;"><span style="font-size:.92rem; font-weight:600; color:#3F2E2A;">' + data.name + '</span>';
      dropBox.appendChild(el);
    });
  }
});
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
