
/* Hero swiperslider */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 500,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
});


/* How jqueryui tabs */  
$( function() {
$( "#tabs" ).tabs({
    event: "mouseover",
    active: 0,
    heightStyle: "auto",
});
} );


/* Faq jqueryui accordion */
$( function() {
    $( "#accordion" ).accordion({
      active: 0,
      animate: {
        duration: 500,
      },
      collapsible: true,
      icons: false,
    });
  });
