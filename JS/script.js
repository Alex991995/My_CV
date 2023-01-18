let menu__item = document.querySelectorAll('.menu__item');
let block = document.querySelectorAll('.block');
let menu__burger = document.querySelector('.menu__burger')
let menu__links = document.querySelector('.menu__links');
let bars = document.querySelector('.fa-bars');

for (let i = 0; i < menu__item.length; i++ ) {
    menu__item[i].addEventListener('click' , function (event) {

    let menu__item_active = document.querySelector('.menu__item_active');
    let block_active = document.querySelector('.block_active');

    menu__item_active.classList.remove('menu__item_active');
    block_active.classList.remove('block_active');

    this.classList.add('menu__item_active');
    block[i].classList.add('block_active');

        event.preventDefault();
    })
}

menu__burger.addEventListener('click', function() {
    menu__links.classList.add('menu__links_active');
    bars.classList.toggle('fa-times');

    if(bars.classList.contains('fa-times') == false){
        menu__links.classList.remove('menu__links_active');
    }
})
