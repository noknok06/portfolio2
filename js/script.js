// const btn = document.querySelector('.btn-menu');
// const nav = document.querySelector('.main-nav');
// btn.addEventListener('click',() => {
//     nav.classList.toggle('open-menu');
//     if(btn.innerHTML == 'MENU'){ 
//         btn.innerHTML = 'CLOSE';
//     }else{
//         btn.innerHTML = 'MENU';
//     }
// });
$(".btn-menu").click(function () {
    $(this).toggleClass('active');
    $('.main-nav').toggleClass('open-menu')
});
