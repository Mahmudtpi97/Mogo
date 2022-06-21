
 $(document).ready(function(){

 $('.menu').click(function(){
  $('.navber ul').slideToggle(1000);
 });

 $('#search').click(function(){
	 $('.search-container').slideToggle(500);
	}); 

 $('.single-count h2').counterUp({
 	   delay:20,
       time:2000
 });
  $('.sing-carousel').owlCarousel({
       loop:true,
       items:1,
       nav:true,
       dots:false,
  });
  $('.logo-carousel').owlCarousel({ 
      loop:true,
       dots:false,
        responsive:{
        0:{
           items:1
        },
        400:{
           items:2,
        },
        700:{
            items:3
        },
        1000:{
            items:6
        }
    }
       
  });
  
  $('.accordion').accordion();

 $('.i-img').magnificPopup({
   type:'image',
   gallery:{
   	enabled:true
   }
 });

 // Menu Scroll 
     $('.navber .nav li a').click(function(){
       $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
         }, 1000);
         return false;
      });

});
