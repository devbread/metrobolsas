!function(){var e=function(){var e=document.querySelector(".burger"),t=document.querySelector(".menu"),n=document.querySelector(".menu__list"),c=document.querySelector(".menu__brand"),i=document.querySelectorAll(".menu__item"),s=!1,r=function(){if(s){t.classList.remove("menu--active"),n.classList.remove("menu__list--active"),c.classList.remove("menu__brand--active"),e.classList.remove("burger--close");for(var r=0,a=i.length;r<a;r++)i[r].classList.remove("menu__item--active");s=!1}else{t.classList.add("menu--active"),n.classList.add("menu__list--active"),c.classList.add("menu__brand--active"),e.classList.add("burger--close");for(var r=0,a=i.length;r<a;r++)i[r].classList.add("menu__item--active");s=!0}},a=function(){e.addEventListener("click",r,!1)},u=function(){a()};return{init:u}}();e.init()}(),jQuery(document).ready(function($){$(".headers").click(function(){$headers=$(this),$content=$headers.next(),$content.slideToggle(500,function(){$headers.text(function(){return $content.is(":visible")?"Ficha Técnica":" Ficha Técnica"})})})});