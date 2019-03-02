
$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 20) {
      $('.header').addClass('scroll-nav',500);
    }
    else {
    $('.header').removeClass('scroll-nav');
    }
  });
});
$(document).ready(function() {
$('.toggle-dox').click(function() {
  
  $('.options-container').toggleClass('open',500);
  $(this).toggleClass('open');
  })

});

$(document).ready(function() {
$('.chapterz2').click(function() {
  
  $('.chapter2').toggleClass('open',500);
  $(this).toggleClass('open');
  })

});
$(document).ready(function() {
$('.closer1').click(function() {
  
  $('.chapter1').toggleClass('open',500);
  $(this).toggleClass('open');
  })

});
$(document).ready(function() {
$('.closer2').click(function() {
  
  $('.chapter2').toggleClass('open',500);
  $(this).toggleClass('open');
  })

});

function success(){
  alert('Success!');
  location.reload();
}
function loader(){
  location.reload();
}

$(document).ready(function(){
 
  $("a").on('click', function(event) {
    
    if (this.hash !== "") {
    
      event.preventDefault();
      
      var hash = this.hash;

            $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
       
        window.location.hash = hash;
      });
    }
  });
});
$(document).ready(function() {
  $(".pumbnail").click(function(e){
    e.preventDefault();
    $('.pumbnail').replaceWith('<iframe src="video.mp4"></iframe>');
  });
});