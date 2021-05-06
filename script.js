let moon = document.getElementById('moon');
let text = document.getElementById('text');
window.addEventListener('scroll',function(){
let value = window.scrollY;
moon.style.top = value + 'px';
text.style.marginLeft = value + 4 + 'px';
})
