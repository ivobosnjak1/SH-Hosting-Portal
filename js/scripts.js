jQuery.event.special.touchstart={setup:function(_,ns,handle){this.addEventListener("touchstart",handle,{passive:!ns.includes("noPreventDefault")});}};jQuery.event.special.touchmove={setup:function(_,ns,handle){this.addEventListener("touchmove",handle,{passive:!ns.includes("noPreventDefault")});}};jQuery.event.special.wheel={setup:function(_,ns,handle){this.addEventListener("wheel",handle,{passive:true});}};jQuery.event.special.mousewheel={setup:function(_,ns,handle){this.addEventListener("mousewheel",handle,{passive:true});}};jQuery(document).ready(function(e){function t(t){e(t).bind("click",function(t){t.preventDefault();e(this).parent().fadeOut()})}
e(".dropdown-toggle").click(function(){var t=e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");e(".button-dropdown .dropdown-menu").hide();e(".button-dropdown .dropdown-toggle").removeClass("active");if(t){e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")}});e(document).bind("click",function(t){var n=e(t.target);if(!n.parents().hasClass("button-dropdown"))e(".button-dropdown .dropdown-menu").hide();});e(document).bind("click",function(t){var n=e(t.target);if(!n.parents().hasClass("button-dropdown"))e(".button-dropdown .dropdown-toggle").removeClass("active");})
setInterval(function time(){var d=new Date();var hours=24-d.getHours();var min=60-d.getMinutes();if((min+'').length==1){min='0'+min;}
var sec=60-d.getSeconds();if((sec+'').length==1){sec='0'+sec;}
if((hours+'').length==1){hours='0'+hours;}
jQuery('#clock').html('<h1>0<small>days</small></h1><h1>'+hours+'<small>hours</small></h1><h1>'+min+'<small>minutes</small></h1><h1>'+sec+'<small>seconds</small></h1>')},1000);if(jQuery(".toggle .toggle-title").hasClass('active')){jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();}
jQuery(".toggle .toggle-title").click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);}else{jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);}});const pageHeader=document.querySelector(".page-header");const openMobMenu=document.querySelector(".open-mobile-menu");const closeMobMenu=document.querySelector(".close-mobile-menu");const topMenuWrapper=document.querySelector(".top-menu-wrapper");const isVisible="is-visible";const showOffCanvas="show-offcanvas";const noTransition="no-transition";let resize;openMobMenu.addEventListener("click",()=>{topMenuWrapper.classList.add(showOffCanvas);});closeMobMenu.addEventListener("click",()=>{topMenuWrapper.classList.remove(showOffCanvas);});window.addEventListener("resize",()=>{pageHeader.querySelectorAll("*").forEach(function(el){el.classList.add(noTransition);});clearTimeout(resize);resize=setTimeout(resizingComplete,500);});function resizingComplete(){pageHeader.querySelectorAll("*").forEach(function(el){el.classList.remove(noTransition);});}});