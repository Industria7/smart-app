$(function () {

    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        headerW = $("#header").innerWidth(),
        scrollOffset = $(window).scrollTop();



    /* Tabs */
    const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
    const tabsItems = document.querySelectorAll(".tabs__item");

    tabsBtn.forEach(onTubClick);

    function onTubClick(item) {
        item.addEventListener("click", function() {
            event.preventDefault();

            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {

            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            }

        });
    };

    document.querySelector(".tabs__nav-btn").click();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smoth Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
        toggleMenu();

    });

    function toggleMenu() {
            if(headerW <= 920) {
                $("#nav").toggleClass("active");
                $("#nav-toggle").toggleClass("active");
            }
    }

    /* Menu nav toggle */
    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();

        toggleMenu();
    });


    /* Slider */
    $("[data-slider]").slick({

      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        }
      ]

    });

    $(".testimonials__slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000
      //adaptiveHeight: true
    });


});