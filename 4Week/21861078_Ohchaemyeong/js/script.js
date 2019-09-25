(function($){
    $(document).ready(function(){
        console.log('ready');
        
        //1. 모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        
        $('li').addClass('active');
   

        //2. 문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        
        $('a.type-2').addClass('current');
       

        //3. 문서내의 a 요소이면서 URL 링크 속성값이 있는 노드를 선택하고, 해당 요소에 underline 클래스를 추가합니다.
     
       
       $('a[href^ = "http://"]').addClass('underline');


        //4.문서내의 li 요소이면서 data-role 속성이 list 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.

        $('li[data-role = "list"]').addClass('role');


        //5.menu 아이디를 가진 nav 요소를 선택하고, open 클래스를 삭제합니다.
        
        $('nav #menu').removeClass('open');

        //6.content 클래스를 가진 section 요소 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        console.log("%c Answer 6.", logStyle);
        var length = $('section.content').length;
        console.log(length);

    });
})(jQuery);