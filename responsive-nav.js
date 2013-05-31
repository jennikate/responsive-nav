//Nav is global & secondary
//On wide screens globals shown & secondary shows on hover
//On narrow screens the menu collapses to an off canvas nav

//Off canvas nav uses as little js as possible. 
//JS is used to detect the height of the largest container and reset the min height of the nav/page to match
// JS is used to detect the width of the screen and when the nav will no longer fit horizontally, it switches to off canvas nav

/* ------------------------------------------------------------
    GLOBAL FUNCTIONS
------------------------------------------------------------ */
/* identifies whether the nav is too wide for the screen and collapses it if need be */
function collapseMenu() {
    var displayWidth = $(document).width(); 
    var navWidth = $('#menuGlobal').width()+100; /* width ignores the box-modal so adding 100 to account for most of the padding */
    var logoWidth = $('.imgLogo').width();
    // if nav width > display width - logo width collapse the nav else show the standard nav
    if ( navWidth > (displayWidth - logoWidth )) {
        $('#viewport').addClass('navCollapse');
        } else {
            $('#viewport').removeClass('navCollapse');
    }
}


/* =============================================================
    DOCUMENT READY
============================================================= */
$(document).ready(function() {


/* ----- Display the best menu ----- */
    /* run on document ready */
    collapseMenu();
    /* run on window resize */
    $(window).resize(function() {
       collapseMenu();
    })
    
  
  
/* ------------------------------------------------------------
    MENU - COLLAPSED
------------------------------------------------------------ */

/* ----- $DisplaySubmenu ----- */
    $('.menuHasSubmenu').click(function () {
        $(this).siblings().slideToggle('fast', function(){
            if (($('#menuCollapsed')[0].scrollHeight) > ($('#containerPage')[0].scrollHeight)) {
                $('.viewport').height($("#menuCollapsed").height());
            } else {
                $('.viewport').height($("#containerPage").height());
            }
        });      
        $(this).children().toggle();
    });

/* ----- $ExpandContent ----- */
    $('.tooltipMobileLink').click(function(){
        $(this).next('.tooltipMobile').slideToggle();
    });


});
    



