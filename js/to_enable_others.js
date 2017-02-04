  var whole="<div class='days-div col s3'><span class='days-count'>%D</span><br><span class='days-name'>Days</span></div><div class='days-div col s3'><span class='days-count'>%H</span><br><span class='days-name'>Hours</span></div><div class='days-div col s3'><span class='days-count'>%M</span><br><span class='days-name'>Mins</span></div><div class='days-div col s3'><span class='days-count'>%S</span><br><span class='days-name'>Secs</span></div>";
  $("#countdown-timer")
  .countdown("2017/02/10 21:00", function(event) {
  	$(this).html(
          // event.strftime('%D days %H:%M:%S')
          event.strftime(whole)
          );
  });
  var clock;
  var curDate=new Date();
  var eventDate=new Date(2017,01,10,21,00,00,00);
  var diff_secs=Date.parse(eventDate)-Date.parse(curDate);
  diff_secs/=1000;
  $(document).ready(function() {
  	var clock;

  	clock = $('.clock').FlipClock({
  		clockFace: 'DailyCounter',
  		autoStart: false,
  		callbacks: {
  			stop: function() {
  				$('.message').html('The Event has started!')
  			}
  		}
  	});

  	clock.setTime(diff_secs);
  	clock.setCountdown(true);
  	clock.start();

  });

  //register form
  $(document).ready(function() {
    var choose=$(".member-choose");
    var wrap2=$(".double-wrap");
    var wrap1=$(".single-wrap");
    $(choose).change(function() {
      if (this.value == 'one') {
       disp_one();

     }
     else if (this.value == 'two') {
       disp_two();
     }
   });
    function disp_one(){
      $(wrap1).removeClass("m6");
      $(wrap1).addClass("m12");
      $(".single-wrap .input-field").removeClass("m12");
      $(".single-wrap .input-field").addClass("m6");
      $(wrap2).hide();
    }
    function disp_two(){
      $(wrap1).removeClass("m12");
      $(wrap1).addClass("m6");
      $(".single-wrap .input-field").removeClass("m6");
      $(".single-wrap .input-field").addClass("m12");
      $(wrap2).show();
    }
    disp_one();
  });

  //preloader
  $(document).ready(function() {

    setTimeout(function(){
      $('body').addClass('loaded');
    });

  });
//round tabs
$(document).ready(function(){
  $('ul.tabs').tabs();
});

var body_ele=$("body");
var html_ele=$("html");
$(document).ready(function(){
 overflow_modal();
});
function overflow_modal(){
  if($('#modal1').hasClass('open'))
  {
    body_ele.addClass("overflownone");
    html_ele.addClass("overflownone");
  }
  else
  {
   body_ele.removeClass("overflownone");
   html_ele.removeClass("overflownone");
 }
}

var keepcheck=setInterval(overflow_modal,100);