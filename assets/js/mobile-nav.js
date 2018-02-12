jQuery(document).ready(function($) {
  $(".nav-toggle").click(function(){
    $("nav.nav-wrapper").toggleClass("user-navigation__visible");
    $(".nav-toggle").toggleClass("nav-toggle--true");
    $(".menu-background").toggleClass("menu-background--true");
	});
  $(".menu-background").click(function(){
    $("nav.nav-wrapper").toggleClass("user-navigation__visible");
    $(".nav-toggle").toggleClass("nav-toggle--true");
    $(".menu-background").toggleClass("menu-background--true");
	});
}(jQuery));