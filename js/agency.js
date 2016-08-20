/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var $win = $(window);
var $marker = $('#work-step');
$win.scroll(function() {
  if ($win.scrollTop() + $win.height() >= $marker.offset().top) {

    $delay = 1000;

    $('.filter').delay($delay).queue(function() {
      $(this).removeClass('filter--2');
      $(this).dequeue();
    });

    $('.filter').delay($delay).queue(function() {
      $(this).removeClass('filter--3');
      $(this).dequeue();
    });

    $('.filter').delay($delay).queue(function() {
      $(this).removeClass('filter--4');
      $(this).dequeue();
    });

    $('.filter').delay($delay).queue(function() {
      $(this).removeClass('filter--5');
      $(this).dequeue();
    });
  }
});
$(document).ready( function () {

  $('.option-box input').on('change',function(e){    
    full_cost();
  });

  $('.input-group-addon .spin-up, .input-group-addon .spin-down').mouseup( function () {
    $elem = $(this).parents('.option-box').find('input');
    $input_val = parseInt($elem.val());
    $max = $elem.attr('data-max');
    $min = $elem.attr('data-min');
    $step = parseInt($elem.attr('data-step'));

    if (($input_val < 100) && ($input_val > 0)) {
      if (($(this).attr('data-spin') == 'up') && ($input_val !== 100)) {
        $val = $input_val + $step;
        full_cost($val); 
        console.log('+^'+$input_val);  
      }      
      if (($(this).attr('data-spin') == 'down') && ($input_val !== 0)) {
        $val = $input_val - $step;
        full_cost($val);
        console.log('-\/'+$input_val);
      }
    } 
    if (($input_val <= 0) && ($(this).attr('data-spin') == 'up')) {
      $input_val += $step;
      full_cost($input_val);
      console.log('\/'+$input_val);
    }
    if (($input_val >= 100) && ($(this).attr('data-spin') == 'down')) {
      $input_val -= $step;
      console.log('^'+$input_val);      
      full_cost($input_val);
    }
  });
  
  function full_cost ($val) {
    $fullcost = 30000;

    if ($val === undefined) {
      $(".option-box input:checked").each( function () {
        if ($(this).prop("checked")) {
          $fullcost += parseInt($(this).attr('data-fullcost'));
        }
      });
      $fullcost += parseInt($('.option-box input.form-control').attr('data-fullcost') * $('.option-box input.form-control').val());
    } else {
      $(".option-box input:checked").each( function () {
        if ($(this).prop("checked")) {
          $fullcost += parseInt($(this).attr('data-fullcost'));
        }
      });
      $fullcost += parseInt($('.option-box input.form-control').attr('data-fullcost')) * $val;
    }
      $('.full-cost-input').html($fullcost);
  }

  $('.option-box .form-control').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  full_cost();
});
    
$(document).ready(function() {  
  $("#carousel").swiperight(function() {  
    $(this).carousel('prev');  
  });  
  $("#carousel").swipeleft(function() {  
    $(this).carousel('next');  
  });  
});  