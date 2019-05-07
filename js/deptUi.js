$(document).ready(function(){
  $('#staff').hide();
  $('.infra').hide();
  $('.gallery').hide();
  $('.contact').hide();
  $('#activity').hide();
  $('#staf').on('click',function(){
    $('.cont').hide();
    $('#staff').show();
    $('.infra').hide();
    $('.contact').hide();
    $('.gallery').hide();
    $('#activity').hide();

  });

  $('#contact').on('click',function(){
    $('.cont').hide();
    $('#staff').hide();
    $('.gallery').hide();
    $('.infra').hide();
    $('.contact').show();
    $('#activity').hide();

  });

  $('#home').on('click',function(){
    $('.cont').show();
    $('#staff').hide();
    $('.gallery').hide();
    $('.contact').hide();
    $('.infra').hide();
    $('#activity').hide();
  });

  $('#infrastruct').on('click',function(){
    $('.infra').show();
    $('#staff').hide();
    $('.gallery').hide();
    $('.cont').hide();
    $('.contact').hide();
    $('#activity').hide();
  });

  $('#gallery').on('click',function(){
    $('.gallery').show();
    $('.infra').hide();
    $('#staff').hide();
    $('.cont').hide();
    $('.contact').hide();
    $('#activity').hide();
  });

  $('#activies').on('click',function(){
    $('#activity').show();
    $('#staff').hide();
    $('.cont').hide();
    $('.contact').hide();
    $('.gallery').hide();
    $('.infra').hide();
  });
});


//infrastructure
$(document).ready(function(){
  $('.lab_photos').hide();
  $('#lab_pht').click(function(){
    $('.lab_photos').toggle();   
  });
});