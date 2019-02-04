//$(document).ready(function(){
//
//  //script for popups
//	$('a.show_popup').click(function () {
//		
//		$('.popup').fadeIn(300);
//		setTimeout(function() {
//			$('#overlay').fadeIn(200).css({'filter' : 'alpha(opacity=80)'});
//		},200);
//		
//		return false;				
//	});	
//	
//	$('a.close').click(function () {
//		
//		$('.popup').fadeOut(300);
//		setTimeout(function() {
//			$('#overlay').fadeOut(200);
//		},200);
//		
//	});
//	$('#overlay').click(function () {
//		console.log("click");
//		$('.popup').fadeOut(300);
//		setTimeout(function() {
//			$('#overlay').fadeOut(200);
//		},200);
//
//	});
//  
//});

$(document).ready(function() {

    var $menuButton = $('.little_menu'),
        $menuWrap = $('.popup'),
        $overlay = $('#overlay'),
        $close = $('a.close');

    $menuButton.on('click', function() {

        //cancel event (click)
        event.preventDefault();

        //add class button-open
        $(this).addClass('button-open');

        //add class menu-show
        $menuWrap.addClass('menu-show');

        //show bg 250ms
        $overlay.fadeIn(250);
    });

    $close.click(function (event) {

        //cancel event (click)
        event.preventDefault();

        //remove class menu-show
        $menuWrap.removeClass('menu-show');

        //remove class menu-show
        $menuButton.removeClass('button-open');

        //hide bg 250ms
        $overlay.fadeOut(250);

	});

    $overlay.click(function () {

        //remove class menu-show
        $menuWrap.removeClass('menu-show');

        //remove class menu-show
        $menuButton.removeClass('button-open');

        //hide bg 250ms
        $overlay.fadeOut(250);

    });
    
   
});