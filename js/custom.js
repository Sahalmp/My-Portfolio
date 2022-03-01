/*
------------------------------------------------------------------------
* Template Name    : Elvish | Responsive Bootstrap 4 Personal Template *
* Author           : ThemesBoss                                        *
* Version          : 1.0.0                                             *
* Created          : May 2018                                          *
* File Description : Main Js file of the template                      *
*-----------------------------------------------------------------------
*/


const scriptURL = 'https://script.google.com/macros/s/AKfycbz6YgNLfBwAsoIrRF3dbCLLpx4-BiC85X1SdMeQB1R4ZXvKE3wyO2yYdlRQ_oGHlzMLFA/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
        let nameFound = nameCheck();
    let numberFound = numberCheck();
    let emailFound = emailCheck();
    let messageFound = messageCheck();
    if (nameFound && numberFound && emailFound && messageFound) {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        $("#contactform")[0].reset();
         swal("You will be contacted soon!", "Form Submitted!", "success");


    }
    else{
        e.preventDefault()
        $("#contactform")[0].reset();
        // $("#form-submit-response").removeClass();
        //  $("#form-submit-response").addClass('text-danger');
        //  $("#form-submit-response").text('Form Not Submitted');





    }
});
const messageCheck = (() => {
    let message = $("#message").val();
    message = message.replace(/  +/g, ' ');
    $("#message").val(message);
    var count = message.replace(/\s+/g, '').length;
    if (message.length == 0) {
        $('#messageErr').show();
        $("#messageErr").text("Please Enter the Message");
        return false;
    }
    else if (message.charCodeAt(0) == 32) {
        $('#messageErr').show();
        $("#messageErr").text("First letter not be a space");
        return false;
    }
    if (count > 10 && count < 250) {
        $('#messageErr').hide();
        return true;
    }
    else if (count < 10) {
        $('#messageErr').show();
        $("#messageErr").text("Minimum 10 characters needed");
        return false;
    }
    else if (count > 250) {
        $('#messageErr').show();
        $("#messageErr").text("Maximum 250 character allowed");
        return false;
    }
})

const emailCheck = (() => {
    let email = $('#email').val();
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.length == 0) {
        $("#emailErr").show();
        $("#emailErr").text("Please enter the Email");
        return false;
    }
    else if (email.endsWith(" ")) {
        $("#emailErr").show();
        $("#emailErr").text("Last letter not be a space");
        return false;
    }
    else if (filter.test(email)) {
        $("#emailErr").hide();
        return true;
    }
    else {
        $("#emailErr").show();
        $("#emailErr").text("Enter the valid email address");
        return false;
    }
})
const numberCheck = (() => {
    let number = $("#number").val();
    var isNum = /^[0-9]+$/;
    if (number.length == 0) {
        $("#numberErr").show();
        $("#numberErr").text("Please enter the number");
        return false;
    }
    if (number.match(isNum)) {
        if (number.length < 10) {
            $("#numberErr").show();
            $("#numberErr").text("Minimum 10 numbers needed");
            return false;
        }
        else if (number.length > 10) {
            $("#numberErr").show();
            $("#numberErr").text("Only 10 numbers allowed");
            return false;
        }
        else if (number.length == 10) {
            $("#numberErr").hide();
            return true;
        }
    }
    else {
        $("#numberErr").show();
        $("#numberErr").text("Please enter the number");
        return false;
    }
})
const nameCheck = (() => {
   $('#name').val($('#name').val().replace(/[^a-zA-Z\s]/gi, ''));
    let name = $("#name").val();
    name = name.replace(/  +/g, ' ');
    var reg_exp = /^[A-Za-z0-9 ]+$/;
    var is_valid = reg_exp.test(name);
    $("#name").val(name);
    if (name.length == 0) {
        $("#nameErr").show();
        $("#nameErr").text("Please enter the name");
        return false;
    }
    else if (name.charCodeAt(0) == 32) {
        $("#nameErr").show();
        $("#nameErr").text("First letter not be a space");
        return false;
    }
    else if (/\s$/.test(name)) {
        $("#nameErr").show();
        $("#nameErr").text("Last letter not be a space");
        return false;
    }
    else if (!is_valid) {
        $("#nameErr").show();
        $("#nameErr").text("Only characters allowed");
        return false;
    }
    else if (name.length >= 3 && name.length <= 20) {
        var hasNumber = /\d/;
        if (hasNumber.test(name)) {
            $("#nameErr").show();
            $("#nameErr").text("Only characters allowed");
            return false;
        }
        else {
            $("#nameErr").hide();
            return true;
        }
    }
    else if (name.length > 20) {
        $("#nameErr").show();
        $("#nameErr").text("Maximum 20 character allowed");
        return false;
    }
    else {
        $("#nameErr").show();
        $("#nameErr").text("Minimum 3 characters needed");
        return false;
    }
})

$("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({ overflow: "visible" }), $(window).on("scroll", function () { $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd") }), $(".navbar-nav a, .scroll_down a").on("click", function (e) { var t = $(this); $("html, body").stop().animate({ scrollTop: $(t.attr("href")).offset().top - 0 }, 1500, "easeInOutExpo"), e.preventDefault() }), $("#navbarCollapse").scrollspy({ offset: 20 }); var a = 0; $(window).on("scroll", function () { var e = $("#counter").offset().top - window.innerHeight; 0 == a && $(window).scrollTop() > e && ($(".lan_fun_value").each(function () { var e = $(this), t = e.attr("data-count"); $({ countNum: e.text() }).animate({ countNum: t }, { duration: 2e3, easing: "swing", step: function () { e.text(Math.floor(this.countNum)) }, complete: function () { e.text(this.countNum) } }) }), a = 1) }), $(window).on("load", function () { var e = $(".work-filter"), t = $("#menu-filter"); e.isotope({ filter: "*", layoutMode: "masonry", animationOptions: { duration: 750, easing: "linear" } }), t.find("a").on("click", function () { var o = $(this).attr("data-filter"); return t.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({ filter: o, animationOptions: { animationDuration: 750, easing: "linear", queue: !1 } }), !1 }) }), $(".img-zoom").magnificPopup({ type: "image", closeOnContentClick: !0, mainClass: "mfp-fade", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] } }), $("#owl-demo").owlCarousel({ autoPlay: 7e3, stopOnHover: !0, navigation: !1, paginationSpeed: 1e3, goToFirstSpeed: 2e3, singleItem: !0, autoHeight: !0 }), $(".blog_play").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }), $(window).on("scroll", function () { $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut() }), $(".back_top").click(function () { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), $(".element").each(function () { var e = $(this); e.typed({ strings: e.attr("data-elements").split(","), typeSpeed: 100, backDelay: 3e3 }) }), $("body").bind("cut copy paste", function (e) { e.preventDefault() }), window.onload = function () { function e(e) { return e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0), e.preventDefault(), !1 } document.addEventListener("contextmenu", function (e) { e.preventDefault() }, !1), document.addEventListener("keydown", function (t) { t.ctrlKey && t.shiftKey && 73 == t.keyCode && e(t), t.ctrlKey && t.shiftKey && 74 == t.keyCode && e(t), 83 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) && e(t), t.ctrlKey && 85 == t.keyCode && e(t), 123 == event.keyCode && e(t) }, !1) };
