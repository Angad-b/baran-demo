// Cookie Countdown Timer
window.addEventListener('DOMContentLoaded', function() {
  var daysEl = document.getElementById('days');
  var hoursEl = document.getElementById('hours');
  var minutesEl = document.getElementById('minutes');
  var secondsEl = document.getElementById('seconds');
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
  var initialSeconds = 6*24*60*60 + 5*60*60 + 3*60 + 29;
  var remaining = initialSeconds;
  function updateCountdown() {
    var secs = remaining;
    var d = Math.floor(secs / (24*60*60));
    secs %= 24*60*60;
    var h = Math.floor(secs / (60*60));
    secs %= 60*60;
    var m = Math.floor(secs / 60);
    var s = secs % 60;
    daysEl.textContent = d;
    hoursEl.textContent = h.toString().padStart(2, '0');
    minutesEl.textContent = m.toString().padStart(2, '0');
    secondsEl.textContent = s.toString().padStart(2, '0');
  }
  updateCountdown();
  setInterval(function() {
    if (remaining > 0) {
      remaining--;
      updateCountdown();
    }
  }, 1000);
});
// Interactive FAQ dropdowns for bakery FAQ
function toggleFaq(item) {
  var answer = item.querySelector('.faq-answer');
  var arrow = item.querySelector('.faq-arrow');
  var cookie = item.querySelector('.faq-cookie');
  var isOpen = answer.style.display === 'block';
  // Close all others
  document.querySelectorAll('.faq-item').forEach(function(faq) {
    if (faq !== item) {
      faq.querySelector('.faq-answer').style.display = 'none';
      faq.querySelector('.faq-arrow').style.transform = '';
      faq.querySelector('.faq-cookie').style.transform = '';
    }
  });
  if (isOpen) {
    answer.style.display = 'none';
    arrow.style.transform = '';
    if (cookie) cookie.style.transform = '';
  } else {
    answer.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
    if (cookie) cookie.style.transform = 'scale(1.2) rotate(-10deg)';
  }
}
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
