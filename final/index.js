/**
 * Created by vshivakumar on 11/14/16.
 */

$(document).ready(function(){
    //$("#header").load('header.html');
    $("#footer").load('footer.html');

    // Scrolling Animations
    AOS.init();


    // Form Message
    function postContactToGoogle(){
        alert("hello");
        var name = $('#name').value();
        var message = $('#message').value();
        if (name !== "") {
            $.ajax({ url: "https://docs.google.com/forms/d/1-9ot14C9_ycZadWJJMieKKDPzXy83f-adaahMkdV0aE/formResponse",
                data: {"entry.1010706963" : name, "entry.1673841111" : message },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){alert("Success 0!")},
                    200: function (){alert("Success 200!")}
                }
            });
        }
    }
});


/* Smooth Scrolling */
/*  https://css-tricks.com/snippets/jquery/smooth-scrolling/  */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

