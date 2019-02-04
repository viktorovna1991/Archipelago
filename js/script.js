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
    var $toggleButton = $('.little_menu'),
        $menuWrap = $('.popup');
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    
   
	
//	$('a.close').click(function () {
//		
//		$('.popup').fadeOut(300);
//		setTimeout(function() {
//			$('#overlay').fadeOut(300);
//		},200);
//		
//	});
//    
//	
    
   
});