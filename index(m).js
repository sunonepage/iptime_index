$(document).ready(function(){
    $('.menu>ul>li>a').on('click',function(event){
        event.preventDefault();
        if( $(this).next().css('display')=='none'){
            $('.sub:visible').stop().slideUp();
            $(this).next().stop().slideDown();            
        }else{
            $(this).next().stop().slideUp();
        }
    });
});
$(function(){
    $('.toggle').on('click', function(){
        $(this).toggleClass('on');
        $('.gnb_bg').fadeToggle(400);
        if($('#gnb').css('display')=='none'){
            $('#gnb').slideDown(400);
            $('#gnb>.menu').slideDown(400);
        } else{
            $('#gnb').slideUp(400);
            $('#gnb>.menu').slideUp(400);
        }
    });
});