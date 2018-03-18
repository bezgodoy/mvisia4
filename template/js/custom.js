/* Theme Name: The Project - Responsive Website Template
 * Author: HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 2.0.5
 * Created: March 2015
 * License URI: http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

$('#navbar-collapse-1 > ul > li > a').on('click', function(e) {
    var currentPos = $(window).scrollTop();
    var target = $(e.currentTarget).attr('href');
    var space =  Math.abs(currentPos - $(target).offset().top);

    var speed = 0.6; // low speed for short distances
    if(space > $('#about-section').outerHeight() + 5) {
      speed = 1.5; // high speed for long distances
    }

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, space / speed);
});

$(window).on('scroll', function() {
    var currentPos = $(window).scrollTop();

    $('.section-btn').each(function() {
        var sectionLink = $(this);

        // capture the height of the navbar
        var navHeight = $('.header').outerHeight() + 1;
        var section = $(sectionLink.attr('href'));

        // subtract the navbar height from the top of the section
        if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
            $('.navbar-right li').removeClass('active-btn');
            sectionLink.parent().addClass('active-btn');
        } else {
            sectionLink.parent().removeClass('active-btn');
        }
    });
});

