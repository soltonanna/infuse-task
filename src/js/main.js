jQuery(document).ready(function ($) {
    /** Top menu sub items toggle */
    $("li.has-sub-menu").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(e.target).next(".sub-menu").toggleClass('active');
    });

    function showPhoneMenu() {
        $(".burger-menu__menu").addClass("active");
        $("body").addClass("disable-scroll");
    }

    function hidePhoneMenu() {
        $(".burger-menu__menu").removeClass("active");
        $("body").removeClass("disable-scroll");
    }

    $(".burger-menu").click(function(e) {
        e.stopPropagation();
        showPhoneMenu();
    });
    $(".icon-close").click(function(e) {
        e.stopPropagation();
        hidePhoneMenu();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.has-sub-menu').length) {
            $('.sub-menu').removeClass('active');
        }
    });
    
    /** Testimonials Sliders */
    var $reviews = $('.single-review');
    var currentIndex = 0;

    function showReview(index) {
        $reviews.removeClass('active').hide();
        $reviews.eq(index).addClass('active').fadeIn();
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % $reviews.length;
        showReview(currentIndex);
    }

    function prevReview() {
        currentIndex = (currentIndex - 1 + $reviews.length) % $reviews.length;
        showReview(currentIndex);
    }

    $('.arrows__right').click(nextReview);
    $('.arrows__left').click(prevReview);

    // Initial display
    showReview(currentIndex);
});