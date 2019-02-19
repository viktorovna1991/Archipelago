$(document).ready(function () {
    var $plus = $('.plus'),
        $minus = $('.minus'),
        number = document.getElementById('n1').value;
    
    $plus.onclick = function Plus () {
       
        number.val(number + 1);
         document.getElementById("n1").innerHTML = number;
    };

    $minus.onclick = function Minus () {
        number.val(number - 1);
    }
});