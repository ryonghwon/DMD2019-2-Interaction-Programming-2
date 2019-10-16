(function($) {
    $(document).ready(function() {
        console.log($('p').eq(1).hasClass('red')); // false.
        
        $('p').addClass('red');
        $('button').addClass('blue');
        $('button').eq(0).removeClass('blue');
        
        console.log($('p').eq(1).hasClass('red')); // true.

        if(!$('p').eq(0).hasClass('blue')){ // false ->
            $('p').eq(0).addClass('blue');
        }
        if($('p').hasClass('red')){ // true ->
            $('p').removeClass('red');
        }

        $('div').click(function(e) {
            e.preventDefault();
            console.log('click');
            // $(this).toggleClass('blue');
            // $(this).toggleClass('blue', true); // === addClass();
            // $(this).toggleClass('blue', false); // === removeClass();

            // class 의 상태를 확인해서 없으면 추가, 있으면 삭제.
            if(!$(this).hasClass('blue')){
                $(this).addClass('blue');
            }else{
                $(this).removeClass('blue');
            }
        });

    });
})(jQuery);