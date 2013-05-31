responsive-nav
==============

Responsive nav / responsive menu : 

1. jQuery detection of screen width 
2. If screen wide enough, show nav horizontally
3. If screen too narrow to fit full nav, collapse into an off canvas nav
4. Nav is 2 levels (pure css on horizontal view, jQuery to slideToggle on collapsed view)
5. Off canvas nav is primarily css (jQuery used for slideToggle as in point 4 & detection of height to force equal height between content div and nav when you expand/contract a secondary menu)


Things worth knowing
1. Works in IE9, IE10, latest Chrome (27), latest Firefox (), Android (Sony Xperia S, Samsung Galaxy SII), iPhone 4 & 5, iPad & iPad mini
2. Issues when testing in IE8 compatibility mode (out of IE10) but seems to work in a pure IE8
3. Viewport is locked to no zoom on phones otherwise off canvas nav becomes horizontally slideable
