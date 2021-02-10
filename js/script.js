var stickyNav = document.querySelector(".botnav");
var stickyNavOffset = stickyNav.offsetTop;
window.addEventListener("scroll", function () {
    var winScroll = window.scrollY;
    if (winScroll >= stickyNavOffset) {
        stickyNav.classList.add("botnav-sticky");
    } else {
        stickyNav.classList.remove("botnav-sticky");
    }
});

jQuery(document).ready(function($) {

    $('#main-nav').hcOffcanvasNav({
      disableAt: false,
      customToggle: $('.toggle'),
      navTitle: 'Niceonesa',
      levelTitles: true,
      levelTitleAsBack: true
    });
    
    });










var input = document.querySelector(".topnav__form > input");
var botInput = document.querySelector(".botnav__form > input");
var back = document.querySelector(".hover-back");
var drop = document.querySelector(".drop");
input.addEventListener("focus", function () {
    back.classList.add("back-show");
})
input.addEventListener("blur", function () {
    back.classList.remove("back-show");
})

botInput.addEventListener("focus", function () {
    back.classList.add("back-show");
})
botInput.addEventListener("blur", function () {
    back.classList.remove("back-show");
})


drop.addEventListener("mouseover", function () {
    {
        back.classList.add("back-show");
    }
})

drop.addEventListener("mouseout", function () {
    {
        back.classList.remove("back-show");
    }
})

// weblang-box
var webLang = document.querySelectorAll(".back-effect");


webLang.forEach(element => {
    element.addEventListener('mouseenter', function () {
        back.classList.add("back-show");
    })

    element.addEventListener('mouseleave', function () {
        back.classList.remove("back-show");
    })
});




var shopbtn = document.querySelectorAll(".shop-popup");
var shop = document.querySelector(".shop");
var shopActive = document.querySelector(".shop-active");
var shopCancel = document.querySelector(".shop__cross");

shopbtn.forEach(element => {
    element.addEventListener("click", function(){
        shop.classList.add("shop-active");
    })
});

shopCancel.addEventListener("click", function(){
    shop.classList.remove("shop-active");
})


var acc = document.querySelectorAll(".accordion");
var brandWrap = document.querySelector(".brand__wrap");
acc.forEach(acc => {
    acc.addEventListener("click", () => {
        if (!(acc.nextElementSibling.classList.contains("brand-close"))) {
            acc.nextElementSibling.classList.add("brand-close");
            acc.classList.add("accordion-active");
        } else {
            acc.nextElementSibling.classList.remove("brand-close");
            acc.classList.remove("accordion-active");
        }
    })
});




var showMore = document.querySelectorAll(".show-more");
var moreSpan = document.querySelectorAll(".more-span");
var lessSpan = document.querySelectorAll(".less-span");

var filterContainer = document.querySelector(".filter__brand--container");

showMore.forEach(showing => {
    showing.addEventListener("click", function () {
        showing.previousElementSibling.classList.toggle("brand-more");
    })
});





function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-target");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}






///////////////////////////////////////
/////////////   Dashboard Tabs Price

function horTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("balance__total");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("balance-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" link-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " link-active";
}


///////////////////////////////////////
////////////    GiftItem Tabs

function giftNav(evt, giftitem) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("giftvo__box");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("giftvo-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" giftvo-active", "");
    }
    document.getElementById(giftitem).style.display = "block";
    evt.currentTarget.className += " giftvo-active";
}


/////////////////////////////////
/////////   Item Detail Tabs

function itemReview(evt, itemDet) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("itab__desc");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("itab__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" itab-active", "");
    }
    document.getElementById(itemDet).style.display = "block";
    evt.currentTarget.className += " itab-active";
}


/////////////////////////////////
///////     Mobile Filter Popup

/////////////////////////////////
/////////   Item Detail Tabs

function mobileFilter(evt, itemDet) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("fmobile__data");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("fmobile__tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" fmobile-active", "");
    }
    document.getElementById(itemDet).style.display = "block";
    evt.currentTarget.className += " fmobile-active";
}



////////////////////////////////////
/////////////   Get Value For Dashboard Input
var radio = document.querySelectorAll(".radio-input");
var input = document.querySelector(".input-rs")
var giftValue = document.querySelector("#gif")
radio.forEach(element => {
    element.addEventListener("click", function () {
        if (element.checked) {
            giftValue.textContent = element.value;
        }

    })
});





////////////////////////////////////////
//////////////  HideShow Password
var passShow = document.querySelectorAll(".watch");
passShow.forEach(element => {
    element.addEventListener("click", function () {
        passInput = element.previousElementSibling;
        if (passInput.type === "password") {
            passInput.type = "text";
            element.classList.add("watch-active");

        } else {
            passInput.type = "password";
            element.classList.remove("watch-active");
        }
    })
});


var register = document.querySelector("#register");
var openreg = document.querySelectorAll(".register-Login");
var closereg = document.querySelector("#close-reg");



openreg.forEach(element => {

    element.addEventListener("click", function () {
        register.classList.add("reg-open");
        register.style.zIndex = 3344444;
        showMail.classList.remove("active");
        phoneLogin.classList.remove("plogin-active");
    })


});

closereg.addEventListener("click", function () {
    register.classList.remove("reg-open");
    showMail.classList.remove("active");
    phoneLogin.classList.remove("plogin-active");
})



var gomail = document.querySelectorAll(".email-login");
var showMail = document.querySelector(".maillogin")
gomail.forEach(element => {
    element.addEventListener("click", function () {
        showMail.classList.add("active");
        phoneLogin.classList.remove("plogin-active");
    })

})


var loginBtn = document.querySelectorAll(".go-Login");
var phoneLogin = document.querySelector(".plogin");



loginBtn.forEach(element => {
    element.addEventListener("click", function () {
       
        phoneLogin.classList.add("plogin-active");
        register.classList.add("reg-open");
    })
});




// Toggle Search

var mobileSearch = document.querySelector("#mobile-search");
var mobileSearchBtn = document.querySelector("#openSearch");
mobileSearchBtn.addEventListener("click", function(){
    mobileSearch.classList.toggle("search-active");
})





// Back To Top

$(function() {
    // Amount of scrolling before button is shown/hidden.
    var offset = 100;
  
    // Fade duration
    var duration = 500;
  
    // Toggle view of button when scrolling.
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.goTop').fadeIn(duration);
      } else {
        $('.goTop').fadeOut(duration);
      }
    });
  
    // Scroll to top when button is clicked.
    $('.goTop').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });
  });



//   Number Increasing Counter

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


var collapse = document.querySelectorAll(".orderconf__right--collapse");
collapse.forEach(element => {
    element.addEventListener("click", function(){
        element.nextElementSibling.classList.toggle("panel-active");
        element.classList.toggle("collapse-active");
    })
});

$('.orderconf__left--cash').click(function () {
    $(this).find('input').prop('checked', true);
});




var payment = document.querySelector("#payment");
var credit = document.querySelector("#credit");
var showAtm = document.querySelector(".orderconf__new");
var newAtm = document.querySelector(".atm-card");

newAtm.addEventListener("click", function(){
   if(credit.checked = true){
       showAtm.classList.add("atm-open");
    }
})

var x = document.querySelector(".orderconf__left--cash");
x.addEventListener("click", ()=>{
    showAtm.classList.remove("atm-open")
})



var addressPopup = document.querySelector(".address-popup");
var addressPopupBox = document.querySelector(".myaddress__popup");
var addressPopupClose = document.querySelector(".myaddress__popup--close");

addressPopup.addEventListener("click" , function(){
    addressPopupBox.classList.add("active");
})

addressPopupClose.addEventListener("click", () => {
    addressPopupBox.classList.remove("active");
})




