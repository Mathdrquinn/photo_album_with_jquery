$(document).ready(function(){
  var i = 0;
  //Open Menu
  $('.trigger').click(function(){
    $('.top_menu_line').toggleClass('top_menu_line_click');
    $('.middle_menu_line1').toggleClass('middle_menu_line1_click');
    $('.middle_menu_line2').toggleClass('middle_menu_line2_click');
    $('.bottom_menu_line').toggleClass('bottom_menu_line_click');
    $(this).parent().children('ul').children('li').toggleClass('li_click');
   }); //End Click event handler


  //Open and Close Albums
  $(".container ul li a").click(function(event) {
    event.preventDefault();
    console.log("Album clicked");
    var imagesToToggle = "#" + $(this).attr("rel") + " .pics";
    var descriptionToToggle = "#" + $(this).attr("rel") + " .describe";
    console.log(imagesToToggle);
    $(imagesToToggle).toggleClass('shrink');
    $(descriptionToToggle).toggleClass('shrink');
  });


  $(".main ul li img").click(function(event) {
    var clicked = $(this);
    console.log(clicked);
    $(clicked).toggleClass("takeOver");
    console.log("the end");

    i++;
    console.log(i);
    if (i % 2 === 1) {
      $(clicked).parent().siblings().css( "display", "none" );
      console.log("disappear");
      $(clicked).parents('ul').toggleClass('tall');
      console.log("tall");
    }
    else {
      $(clicked).parent().siblings().css( "display", "inline-block" );
      console.log("un-disappear");
      $(clicked).parents('ul').toggleClass('tall');
      console.log("small");
    }
  });

}); //End document.ready
