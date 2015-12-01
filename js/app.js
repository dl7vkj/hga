$(document).foundation();

// $('#fullpage').fullpage({
//       anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],              
//       menu: '#gallery-lightbox-menu',
//       resize: false,
//       animateAnchor:false,
//       scrollOverflow: true,
//       autoScrolling:true,
//       responsive: 900,
//       fitSection: false,
//       navigation:true,
//       navigationPosition: 'right',
//       navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'], 
//       showActiveTooltip: false,      
//       slidesNavigation: true,
//       slidesNavPosition: 'bottom',                              
//       continuousVertical:true,
//       scrollBar: true,
//       css3: true,
      
//       afterLoad: function (anchorLink, index) {
//           // #toggle-menu for section 4...
//           if (index === 4) {
//              $(".toggle-menu").css('visibility','visible').addClass("animated fadeIn");
//           }
//       },
//           onLeave: function (index, nextIndex, direction) {
//         //going from section 3 to 4
//         if (index === 3 && direction === 'down') {
//            //whatever
//         }

//         //going form section 4 to 3
//         else if (index === 4 && direction === 'up') {
//            $(".toggle-menu").css('visibility','hidden');
//         }
//     }
// });


// // toggle-lighbox-opener

// $('.gallery-open').click(function() {
// if($('.toggle-lighbox').hasClass('slideOutLeft'))
// {
//     $('.toggle-lighbox').addClass('slideInLeft').removeClass('hide slideOutLeft');
// }
// else
// {
//    $('.toggle-lighbox').addClass('slideOutLeft').removeClass('slideInLeft');
// }
// });

// // slimscroll.js

// $(function(){
//     $('.gallery-lightbox-innerwrap').slimScroll({
//     height: '100vh',
//     size: '7px',
//     position: 'right',
//     color: '#87704c',
//     alwaysVisible: true,
//     railVisible: true,
//     railColor: '#87704c',
//     railOpacity: 0.3,
//     wheelStep: 10,
//     allowPageScroll: true,
//     disableFadeOut: true,
//     });
// });



// $(document).on('click', '.scrollDown', function(){
//   $.fn.fullpage.moveSectionDown();
// });    
// $(document).on('click', '.scrollUp', function(){
//   $.fn.fullpage.moveSectionUp();
// }); 
 
// wow = new WOW(
// 	{
// 	boxClass:     'wow',      // default
// 	animateClass: 'animated', // default
// 	offset:       100,          // default
// 	mobile:       true,       // default
// 	live:         true        // default
// 	}
// );
// wow.init();         
