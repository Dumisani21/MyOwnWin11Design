const mainBtn = document.getElementById('mainBtn')
const menu = document.querySelector('.menu')

function popMenu() {

    const isHidden = menu.classList.contains('hide')

    if (isHidden) {
        menu.classList.toggle('hide')
        menu.style.left = `${0.5}%`
    }else{
        menu.classList.toggle('hide')
        menu.style.left = `${-100}%`
    }
}

mainBtn.addEventListener('click', popMenu)
