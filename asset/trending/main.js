const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const theme = $('.header__theme');
const container = $('.container');
const LoginBtn = $('.header__logo');
const line = $('.line');
const controls = $$('.control__btn');
// Thay đổi background
theme.onclick = function(){
    container.classList.toggle('change')
}
LoginBtn.onclick = function(){
    const modal = document.getElementById('modal')
    modal.classList.add('open');
    const modalbox = $('.modal__box');
    modalbox.addEventListener('click', function(event){
        event.stopPropagation()
        
    });
    $('.Btn--ghibli').onclick = function(){
        $('.modal__box__option__login').classList.add('open');
        const isOpenLogin = $('.modal__box__option__login').classList.contains('open');
        if (isOpenLogin) {
            modal.onclick = function(){
                $('.modal__box__option__login').classList.remove('open');
                modal.classList.remove('open');
            };
        }
    };
    modal.onclick = function(){
        $('.modal__box__option__login').classList.remove('open');
        modal.classList.remove('open');
    };
    $('.modal__box__option__login').addEventListener('click', function(event){
        event.stopPropagation();
    });
}; 
controls.forEach((btn, index) => {
    btn.onclick = function(){
        $('.control__btn.active').classList.remove('active');
        this.classList.add('active');
        line.style.left = this.offsetLeft + 132 + 'px';
    }
    
});