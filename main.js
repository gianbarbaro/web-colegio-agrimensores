const nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY > 0)
})