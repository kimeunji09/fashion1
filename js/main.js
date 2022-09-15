

//인스타그램 영역
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});



//뉴스&이벤트 슬라이드 영역
var swiper = new Swiper(".news .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


//메뉴
jQuery(document).ready(function(){
$('.menu>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});
});

//what you want 영역
var currentIndex = 0;
    
setInterval(function(){
    if(currentIndex < 2) {
        currentIndex ++;
    } else {
        currentIndex = 0;
    } 
    
    $(".contents2 ul li").eq(currentIndex).siblings().fadeOut();
    $(".contents2 ul li").eq(currentIndex).fadeIn();
    
},3000);

//slide : 상하
let img = $('#slide ul li:first').clone();
img.appendTo($('#slide ul'));

//setInterval(함수or자바스크립트코드, 시간)
//1초 = 1000, 2초 = 2000,  3초 = 3000
let num = 1;
setInterval(function(){
if(num > 2){
    $('.visual ul').css('margin-top', 0);
    num = 1;
}
$('.visual ul').animate({marginTop : "-=800px"},600);
num++;
},3000);


//햄버메뉴, 검은색배경
$('.menu-toggle-btn, .slide-fade').on('click', function(){
    $('.slide-fade, .mo-nav').toggleClass('ison');
});

//아코디언메뉴
$('.mo-nav ul li a').click(function(e){
    e.preventDefault();
    $(this).next().slideUp();
    $(this).next().is(':visible') || $(this).next().slideDown();
});