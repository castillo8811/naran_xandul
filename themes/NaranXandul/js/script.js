/**
 * Created by scastillo on 8/06/17.
 */

jQuery(document).ready(function(){


    menu=jQuery("#block-naranxandul-mainnavigation").mmenu({
        "offCanvas": {
            "position": "bottom",
            "zposition": "front"
        },
        "content": [
            "searchfield"
        ]
    });
    var icon = jQuery("#my-icon");
    var API = menu.data( "mmenu" );


    icon.on( "click", function() {
        API.open();
    });

    API.bind( "open:finish", function() {
        setTimeout(function() {
            icon.addClass( "is-active" );
        }, 100);
    });
    API.bind( "close:finish", function() {
        setTimeout(function() {
            icon.removeClass( "is-active" );
        }, 100);
    });


    jQuery('#stage').slick({
        centerMode: true,
        centerPadding: '8   0px',
        slidesToShow: 3,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '30%',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1,
                    centerPadding: '0',
                }
            }
        ]
    });

    jQuery('#nombres .carrousel, #cursos .carrousel, #frases .carrousel').slick({
        centerMode: true,
        centerPadding: '8   0px',
        slidesToShow: 3,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '10%',
                }
            }
        ]
    });



    if(jQuery('.contact-message-feedback-form').length) {
        jQuery('#edit-name').attr('placeholder', 'Tu nombre').width(250);
        jQuery('#edit-mail').attr('placeholder', 'Tu correo electrónico').width(250);
        jQuery('#edit-field-numero-telefonico-0-value').attr('placeholder', 'Número Telefónico').width(250);
        jQuery('#edit-subject-0-value').attr('placeholder', 'Asunto');
        jQuery('#edit-message-0-value').attr('placeholder', 'Cuéntanos, ¿cómo te podemos ayudar?');
    }

    if(jQuery('#edit-mergevars-email').lenght){
        jQuery('#edit-mergevars-email').attr('placeholder', 'Correo electrónico');
    }

  if(jQuery(".path-node")){
    jQuery("#social-shares").sticky({ topSpacing: 0 });
  }


      jQuery('.mm-listitem').each(function(){
          category=jQuery(this).find('a').eq(0).attr('data-drupal-link-system-path');
          jQuery(this).find('a').eq(0).prepend('<span class="category category-'+category+'-gris"></span>');
      });

});
