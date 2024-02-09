const burger = document.querySelector('.burger-container');
const mobileNav = document.querySelector('.scroll-nav')
const mobileNavList = document.querySelector('.scroll-nav .navWrapper');
const close = document.querySelector('.close');

console.log(burger, mobileNavList, close)

burger.addEventListener('click', ()=> {
    mobileNavList.classList.toggle('open')

})

// close.addEventListener('click', (e)=> {
//     mobileNavList.classList.toggle('open')
// })

mobileNavList.addEventListener('click', ()=> {
    mobileNavList.classList.toggle('open')
})

window.addEventListener("scroll", (event) => {
    window.scrollY > 200 ? burger.classList.remove('hidden') : burger.classList.add('hidden')
});