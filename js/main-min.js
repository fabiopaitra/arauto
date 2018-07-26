"use strict";$(document).on("ready",function(){for(var e,a=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,o=window.console=window.console||{},s=$(window),l=$("html, body");n--;)e=t[n],o[e]||(o[e]=a);for(var r=$(".bg-img"),i=0;i<r.length;i++){var c=r[i].getAttribute("data-image-src");r[i].style.backgroundImage="url('"+c+"')",r[i].style.backgroundRepeat="no-repeat",r[i].style.backgroundPosition="right bottom",r[i].style.backgroundSize="cover"}for(var d=$(".img-block"),i=0;i<d.length;i++){var c=d[i].getAttribute("src"),g=document.createElement("div");g.setAttribute("class","img"),g.style.backgroundImage="url('"+c+"')",g.style.backgroundRepeat="no-repeat",g.style.backgroundPosition="center",g.style.backgroundSize="cover",$(d[i]).after(g),d[i].style.display="none"}for(var u=$(".bg-color"),i=0;i<u.length;i++){var c=u[i].getAttribute("data-bgcolor");u[i].style.backgroundColor=c}try{$(".clock-countdown").downCount({date:$(".site-config").attr("data-date"),offset:10})}catch(e){o.log("clock disabled/unavailable")}var p=$(".all-menu-wrapper .nav-link"),m=$(".menu-icon, #navMenuIcon"),v=$(".all-menu-wrapper"),h=$(".click-exit"),f=$(".page-main, .navbar-sidebar, .page-cover"),b=$(".navbar-mainmenu a, .navbar-sidebar a");m.on("click",function(){return m.toggleClass("menu-visible"),v.toggleClass("menu-visible"),p.toggleClass("menu-visible"),f.toggleClass("menu-visible"),!1}),b.on("click",function(){return m.removeClass("menu-visible"),v.removeClass("menu-visible"),p.removeClass("menu-visible"),f.removeClass("menu-visible"),!0}),h.on("click",function(){return m.toggleClass("menu-visible"),v.toggleClass("menu-visible"),p.toggleClass("menu-visible"),f.toggleClass("menu-visible"),!1});for(var C=$(".slide-show .img"),w=[],i=0;i<C.length;i++){var c=C[i].getAttribute("data-src");w.push({src:c})}$(".slide-show").vegas({delay:5e3,shuffle:!0,slides:w,animation:["kenburnsUp","kenburnsDown","kenburnsLeft","kenburnsRight"]});var k=$(".video-container video, .video-container object");$(".section .content .anim.anim-wrapped").wrap("<span class='anim-wrapper'></span>"),s.width()>768&&$(".text-slide-in").each(function(){var e=$(this),a=$.trim(e.html()).split("<br>");e.html(""),$.each(a,function(a,t){$('<span class="line"></span>').appendTo(e),t=$("<textarea />").html(t).text();var n=$.trim(t).split("");$.each(n,function(a,t){t=" "==t?"&nbsp;":t,$('<span class="letter">'+$.trim(t)+"</span>").appendTo($(".line:last",e))})})});var y=$(".page-fullpage .section"),x=$(".header-top .logo"),S=$("body"),E=$(".section"),T=$(".hh-header"),A=$(".slide"),B=$(".p-footer .arrow-d"),R=$(".page-footer"),I=$(".page-header"),P=$(".page-header,.page-footer,.section-footer, .cover-frame"),L=$(".section"),O=[],U=[],_,j,z,D=$("#mainpage"),H=$(".gallery-main"),F=$(".send_email_form"),V=$(".send_message_form"),q=!1,M=!1,W=!0,G=!0;s.width()<601&&(q=!1,W=!1),s.height()<480&&(q=!1,W=!1),H.height()>1&&(G=!1),D.hasClass("scroll-fullpage")&&(q=!0,M=!0);for(var i=0;i<y.length;i++)O.push(y[i]);window.asyncEach(O,function(e,a){var t=e.getAttribute("data-section");U.push(t+""),a()},function(e){D.width()&&D.fullpage({menu:"#qmenu",anchors:U,verticalCentered:!1,css3:!1,navigation:!0,responsiveWidth:1024,responsiveHeight:480,scrollOverflow:q,autoScrolling:M,fitToSection:G,scrollOverflowOptions:{click:!1,submit:!0},normalScrollElements:".section .scrollable",afterRender:function(){var e=document.getElementById("parallax-cover");if(e&&s.width()>1024)var a=new Parallax(e);new Swiper(".carousel-swiper-alpha-demo .swiper-container",{pagination:".carousel-swiper-alpha-demo .items-pagination",paginationClickable:".carousel-alpha-demo .items-pagination",nextButton:".carousel-swiper-alpha-demo .items-button-next",prevButton:".carousel-swiper-alpha-demo .items-button-prev",loop:!0,grabCursor:!0,centeredSlides:!1,autoplay:5e3,autoplayDisableOnInteraction:!1,slidesPerView:2,spaceBetween:16,effect:"slide",breakpoints:{440:{slidesPerView:1,spaceBetween:0}}}),k.maximage("maxcover");var t="./ajaxserver/serverfile.php",n="./ajaxserver/serverfile.php";F.attr("action")&&""!=F.attr("action")&&(t=F.attr("action")),V.attr("action")&&""!=V.attr("action")&&(n=V.attr("action")),F.initForm({serverUrl:t}),V.initForm({serverUrl:n})},afterResize:function(){var e=$(this);$.fn.fullpage.reBuild()},onLeave:function(e,a,t){B.addClass("gone"),L.addClass("transition"),A.removeClass("transition"),L.removeClass("transition")},afterLoad:function(e,a){var t=$(".page-cover");a>1?(t.hasClass("scrolled")||t.addClass("scrolled"),I.hasClass("fp-scrolled")||I.addClass("fp-scrolled"),R.hasClass("fp-scrolled")||R.addClass("fp-scrolled")):(t.removeClass("scrolled"),I.removeClass("fp-scrolled"),R.removeClass("fp-scrolled"));var n=$(".section.active"),o=$("#fp-nav");n.hasClass("section-anim"),n.hasClass("section-text-bright")?(P.addClass("text-bright"),o.addClass("text-bright")):(P.removeClass("text-bright"),o.removeClass("text-bright")),n.hasClass("section-text-dark")?(P.addClass("text-dark"),o.addClass("text-dark")):(P.removeClass("text-dark"),o.removeClass("text-dark")),n.hasClass("content-white")?(P.addClass("content-white"),o.addClass("content-white")):(P.removeClass("content-white"),o.removeClass("content-white")),n.hasClass("hide-clock")?T.addClass("gone"):T.removeClass("gone")}})}),$(".scrolldown .down, .scroll.down").on("click",function(){try{$.fn.fullpage.moveSectionDown()}catch(e){l.animate({scrollTop:window.innerHeight},400,function(){})}}),$(".scrolldown .up, .scroll.up").on("click",function(){try{$.fn.fullpage.moveSectionUp()}catch(e){l.animate({scrollTop:window.innerHeight},400,function(){})}}),$(".slider-navigation .left").on("click",function(){try{$.fn.fullpage.moveSlideLeft()}catch(e){}}),$(".slider-navigation .right").on("click",function(){try{$.fn.fullpage.moveSlideRight()}catch(e){}});var J=$(document).height()-s.height();s.on("scroll",function(){var e=$(this).scrollTop(),a=$(".page-footer, .page-header");e>100&&e<J-100?a.addClass("scrolled"):a.removeClass("scrolled")}),s.on("load",function(){$("#page-loader").addClass("p-hidden"),$(".section").addClass("section-anim")})});