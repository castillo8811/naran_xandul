/**
 * Created by scastillo on 8/06/17.
 */

jQuery(document).ready(function(){


    menu=jQuery("#block-naranxandul-mainnavigation").mmenu({
        "offCanvas": {
            "position": "bottom",
            "zposition": "front"
        },

        "navbar":{
          title:'Menú'
        },
        "navbars": [
            {
                "position": "top",
                "content": [
                    "searchfield"
                ]
            }
        ],
        "searchfield": {
            "panel": true,
            "showTextItems": true,
            "search":false,
            "add":true,
            "title":"Buscar"
        },

    },{
        "searchfield": {
            "form" :
                {
                    "id":"search_site",
                    "action":"/search/node",
                    "method":"GET"
                }
            ,
            "clear": false,
            "submit":true,
        }});
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

    jQuery(".mm-searchfield__input input").attr('name','keys');

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

  var ga_sended=false;
  jQuery(window).scroll(function(){
    if(jQuery('#fb-comments').length) {
      var aTop = jQuery('#fb-comments').offset().top;
      if (jQuery(this).scrollTop() >= aTop) {
        if (!ga_sended) {
          ga("send", "pageview");
          ga_sended = true;
        }
      }
    }
  });

    jQuery('#nombres .carrousel, #cursos .carrousel, #frases .carrousel, #nombres-home .carrousel, .cursos-page-block .carrousel').slick({
        slidesToShow: 3,
        slidesToScroll:3,
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
          category=jQuery(this).find('a').eq(0).attr('href');
          jQuery(this).find('a').eq(0).prepend('<span class="category category-'+category.replace('/','')+'-gris"></span>');
      });

    jQuery(".mm-searchfield__input input").attr("placeholder","Buscar");

    jQuery('.pregunta-item .plus').click(function(){
        jQuery(this).parent().parent().find('.pregunta-answer').eq(0).removeClass('hidden').slideDown();
        jQuery(this).parent().parent().find('.minus').eq(0).removeClass('hidden');
        jQuery(this).parent().parent().find('.plus').eq(0).addClass('hidden');

    });

    jQuery('.pregunta-item .minus').click(function(){
        jQuery(this).parent().parent().find('.pregunta-answer').eq(0).addClass('hidden').slideDown();
        jQuery(this).parent().parent().find('.minus').eq(0).addClass('hidden');
        jQuery(this).parent().parent().find('.plus').eq(0).removeClass('hidden');

    });
});
