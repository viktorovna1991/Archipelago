function hideScrollBody() {
    $('body,html').addClass('scroll_hide');
}

function showScrollBody() {
    $('body,html').removeClass('scroll_hide');
}

$(document).ready(function() {

    var $menuButton = $('.little_menu'),
        $menuWrap = $('.popup'),
        $overlay = $('#overlay'),
        $close = $('a.close');
    
    //menu First
    $menuButton.on('click', function() {

        //cancel event (click)
        event.preventDefault();

        //add class button-open
        $(this).addClass('button-open');

        //add class menu-show
        $menuWrap.addClass('menu-show');

        //show bg 250ms
        $overlay.fadeIn(250);
        
        //hide scroll body
        hideScrollBody();
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
        
        //show scroll body
        showScrollBody();

	});

    $overlay.click(function () {

        //remove class menu-show
        $menuWrap.removeClass('menu-show');

        //remove class menu-show
        $menuButton.removeClass('button-open');

        //remove class menu-show
        $menuWrap2.removeClass('menu-show2');

        //remove class menu-show
        $stores.removeClass('button-open2');
        
        //hide bg 250ms
        $overlay.fadeOut(250);
        
        //show scroll body
        showScrollBody();
        
    });
    //end menu first
    
    //menu Press
    var $Press = $('.menuPress'),
        $wrapPress = $('.Press'),
        $logo = $('.logo-icon'),
        $Stores = $('.Stores'),
        $menuClose = $('.littleMenu');

    $Press.on('click', function() {

        //cancel event (click)
        event.preventDefault();

        //add class menu-show
        $wrapPress.addClass('menu-show-left');
        $menuClose.addClass('max_index');
        $logo.addClass('max_index');
        $Stores.addClass('max_index');
        
    });

    $menuClose.click(function (event) {

        //cancel event (click)
        event.preventDefault();

        //remove class menu-show
        $wrapPress.removeClass('menu-show-left');
        $menuClose.removeClass('max_index');
        $logo.removeClass('max_index');
        $Stores.removeClass('max_index');

	});
    //end Press
    
    //Stores
    var $stores = $('.stores'),
        $menuWrap2 = $('.popup2'),
        $close2 = $('a.close2');

    $stores.on('click', function() {

        //cancel event (click)
        event.preventDefault();

        //add class button-open
        $(this).addClass('button-open2');

        //add class menu-show
        $menuWrap2.addClass('menu-show2');

        //show bg 250ms
        $overlay.fadeIn(250);
    });

    $close2.click(function (event) {

        //cancel event (click)
        event.preventDefault();

        //remove class menu-show
        $menuWrap2.removeClass('menu-show2');

        //remove class menu-show
        $stores.removeClass('button-open2');

        //hide bg 250ms
        $overlay.fadeOut(250);

	});
    //end Stores
    
    //contact
    var $menuContact = $('a.menuContact'),
        $popupContact = $('.popupContact'),
        $overlay = $('#overlay'),
        $closeContact = $('a.closeContact');

    $menuContact.on('click', function() {

        //cancel event (click)
        event.preventDefault();

        //add class button-open
        $(this).addClass('button-open3');

        //add class menu-show
        $popupContact.addClass('menu-show3');

        //show bg 250ms
        $overlay.fadeIn(250);
    });

    $closeContact.click(function (event) {

        //cancel event (click)
        event.preventDefault();

        //remove class menu-show
        $popupContact.removeClass('menu-show3');

        //remove class menu-show
        $menuContact.removeClass('button-open3');

        //hide bg 250ms
        $overlay.fadeOut(250);

	});

    $overlay.click(function () {

        //remove class menu-show
        $popupContact.removeClass('menu-show3');

        //remove class menu-show
        $menuContact.removeClass('button-open3');

        //hide bg 250ms
        $overlay.fadeOut(250);

    });
    //end contact
   
});

var m_id = new Array('s_mn_1','s_mn_2'); 
listStart = function allclose() { 
  for (i=0; i < m_id.length; i++){ 
  document.getElementById(m_id[i]).style.display = "none"; 
  } 
} 
function menuOpen(id){ 
  for (i=0; i < m_id.length; i++){ 
  if (id != m_id[i]){ 
  document.getElementById(m_id[i]).style.display = "none"; 
  } 
  } 
  if (document.getElementById(id).style.display == "block"){ 
  document.getElementById(id).style.display = "none"; 
  }else{ 
  document.getElementById(id).style.display = "block"; 
  } 
} 

window.onload=listStart; 