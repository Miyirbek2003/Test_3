$(document).ready(function(){
    $(".hide").hide();
    $(".top_20").hide();
    $(".show").click(function(){
      $(".top_20").show();
      $(".hide").show();
      $(".show").hide();
    });
  });

  $(document).ready(function(){
    $(".hide").click(function(){
      $(".top_20").hide();
      $(".show").show();
      $(".hide").hide();
    });
  });

$(document).ready(function(){
  $('.hamburger').click(function(){
    $(".phone_menu").show();
    $('.hamburger').hide();
  });

});

$(document).ready(function(){
  $('.x').click(function(){
    $('.hamburger').show();
    $(".phone_menu").hide();
  });
});

