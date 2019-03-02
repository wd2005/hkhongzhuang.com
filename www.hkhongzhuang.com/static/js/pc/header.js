$(function(){
    var banner_Swiper = new Swiper('#bannerSwiper',{
        loop: true,
        speed:600,
        grabCursor : true,
        lazyLoading : true,
        parallax:true,
        autoplay:{
            delay: 8000,
            //loop��Ч  stopOnLastSlide: true,
        },
        pagination: {
            el:'#bannerpagination',
            clickable :true,
        },
        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        }, lazy: {
        loadPrevNext: true,
    },
    });
    // tag�б�ҳ����������Ҫ������ʾprompt()
    function nav(){
        var obj = null;
        var As = document.getElementById('nav').getElementsByTagName('a');
        for (i = 0; i < As.length; i++) {
            if (window.location.href.indexOf(As[i].href) >= 0) {
                obj = As[i];
            }
        }
        obj.parentNode.className = 'foc';
    }
    nav();
});
