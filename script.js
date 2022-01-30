const header = document.querySelector('.main-header')


console.log(header);
function headerChange(e) {
    header.classList.toggle('sticky', window.scrollY > 0)
}

window.addEventListener('scroll', headerChange)