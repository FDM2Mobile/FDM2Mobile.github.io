(function($){
    // Getting started 페이지에서 페이지 랜더링 과정이 그대로 보여지는 현상 커버하기 위한 transition 트릭
    if($('.page-id-28').length){
        setTimeout(function(){
            $('#main').addClass('show');
        },1000);
    }
 
    // 사이드에 카테고리가 표시되지 않는 FAQ 페이지. 즉, 한뎁스 이상 들어간 FAQ 페이지에서는 TOP Question 목록을 배경과 border 가 있는 박스로 표시
    if(!$('.cmfaq-categories').length) $('.top-question').addClass('not-home');
 
    $(document).ready(function(){
        // WINDOWS 10 의 IE11 에서 스크롤하다보면 헤더의 소셜 icon 이 사라지는 현상 대응 (SVG 를 이미지로 대체)
        $('.header-bar .soc-ico .facebook').html('<img src="/wp-content/uploads/2016/06/fb.png" width="24" height="24" style="position:relative !important; z-index:9999 !important;">');
        $('.header-bar .soc-ico .you-tube').html('<img src="/wp-content/uploads/2016/06/youtube.png" width="24" height="24" style="position:relative !important; z-index:9999 !important;">');
    });
})(jQuery);
