
  /* HAMBURGER MENU CODE */
  $(document).on('turbolinks:load', function(){

    //Open hamburger menu on click
   $('.menu-toggle').click(function() {
       $('.nav').toggleClass('nav-open');
       $(this).toggleClass('open');
       $('.nav').show();
   
   });


   //hide menu when nav list item is clicked
   $('.nav li').click(function() {

        
        $('.nav').toggleClass('nav-open');
        $('.menu-toggle').toggleClass('open');
        
   });
   
});

/* SCROLL FUNCTION TO FADE IMAGE */
$(window).scroll(function() {  //update this so that the logo stops fading at about 30%
   var scrollTop = $(this).scrollTop();

       $('.header-logo-img').css({
       opacity: function() {
           var elementHeight = $(this).height(),
           opacity = ((elementHeight - scrollTop) / elementHeight);
           return opacity;
       
       
       }
       
   
});

/* SCROLL FUNCTION TO SHOW/HIDE HOME LINK AND FOOTER */
$(window).scroll(function(){
   var scroll = $(window).scrollTop();
       if (scroll >= 500) {
           $(".hidden").removeClass("hidden");
           $(".home").removeClass("hidden");
       }
   if (scroll <= 500) {
       $(".footer-email").addClass("hidden");
       $(".home").addClass("hidden");
   }
})

   });
   
/* COLLAPSIBLE STUFF */
/* Modified code provided by Timothy Groote on StackOverflow */
$(document).on('turbolinks:load', function(){
        /* expand */
        $('.sj-info .head').click(function () {
            
            if($(this).parent('div').hasClass('expanded'))
            {
               $(this).parent('div').toggleClass('expanded');
               $(this).next('div').slideUp();
            }
            else
            {
               $('.sj-info.expanded .head').next('div').slideUp();
               $('.sj-info.expanded').removeClass('expanded');
               $(this).parent('div').toggleClass('expanded');
               $(this).next('div').slideDown();
            }
            
        });
    });