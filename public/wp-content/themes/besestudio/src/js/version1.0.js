(function($) {
    $(document).ready(function() {


        $('#besestudio').vide({
            mp4: 'https://res.cloudinary.com/bese/video/upload/v1539128544/intro',
            webm: 'uploads/intro',
            ogv: 'uploads/intro',
            poster: 'uploads/intro'
        });
        setTimeout(function beseLoading() {
            $("#loading-logo").fadeIn();
            var beseInterval;

            function playDemo(id, interval) {
                $('#loading-progress').animate({
                    'opacity': '1'
                });
                var p = 0;
                $('#' + id).loadgo('resetprogress');
                $('#loading-progress').html('0%');
                window.setTimeout(function() {
                    interval = window.setInterval(function() {
                        if ($('#' + id).loadgo('getprogress') === 100) {
                            window.clearInterval(interval);
                            $('body').css("background", "#ffffff")
                            $('#intro').addClass("page-loaded");
                            $('.page-loading').fadeIn('slow');
                            $('#loading-progress').animate({
                                'opacity': '0'
                            });
                            return
                        }
                        var prog = p * 4;
                        $('#' + id).loadgo('setprogress', prog);
                        $('#loading-progress').html(prog + '%');
                        p++
                    }, 250)
                }, 300)
            }
            $("#loading-logo").load(function() {
                $('#loading-logo').loadgo({
                    'direction': 'lr'
                });
                playDemo('loading-logo', beseInterval)
            }).each(function() {
                if (this.complete) {
                    $(this).load()
                }
            })
        }, 1000);
       //*** GALLERYY**/
       $('.popup').magnificPopup({
            type: 'image',
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',           
            image: {
                verticalFit: true,
    
            },          
          
            gallery: {
              enabled: true 
            },       
        });

        var $header = $('.header');
        var $btnMenu = $('.menu-mobile'),
            $hideMenu = $('.hide-menu'),
            $navMenu = $('nav a');
        $btnMenu.on('click', function() {
            $header.toggleClass('active');
            if ($header.hasClass('active')) {
                $hideMenu.addClass('active')
            } else {
                $hideMenu.removeClass('active')
            }
        });
        $hideMenu.on('click', function() {
            $header.removeClass('active');
            $hideMenu.removeClass('active')
        });
        $navMenu.on('click', function() {
            $header.removeClass('active');
            $hideMenu.removeClass('active')
        });
        $('.menu-item-has-children', '.main-menu').on('click', ' > a', function(e) {
            var ww = $(window).width();
            if (ww <= 991) {
                var $parent = $(e.target).closest('.menu-item-has-children');
                e.preventDefault();
                $('>.sub-menu', $parent).slideToggle(400)
            }
        });
        var $preload = $('#preload');
        if ($preload.length) {
            $(window).on('load', function() {
                $preload.fadeOut(400)
            })
        }
        initOwl()
    });

    
    function initOwl() {
        //owl carousel
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });

        function resizeImageOwl() {
            // resize image Owl
            var height = $(window).height() - 120;

            if($(window).width() <= 599){
                $(".slide-image").css("height", height);
            } else {
                $(".slide-image").css("height", height)
            }
        }
        resizeImageOwl();
        

        $(window).resize(function() {
            resizeImageOwl();
        });
    }
 
    

    $(function() {
        if (Modernizr.history) {
            var $mainContent = $('#content'),
                $menuNav = $('nav li');
            $(document).on('click','.navigation a',function (e) {  
                if($("#intro").hasClass('front_page')) {
                    if($(this).hasClass('active')) {
                        return false;
                    }   

                    var _href = $(this).data("target");
                    history.pushState(null, null, _href);

                    loadContent(_href); 


                    return false;
                }
            });
            

            function loadContent(href) { 
                $.ajax({
                    type: "GET",
                    url: href,
                    dataType: "html",
                    
                }).done(function(data) {
                    // $mainContent.fadeOut(function() {                                                                  

                    console.log(href); 
                    $menuNav.removeClass('active');
                    $(".navigation a").removeClass("active");
                    
                    $(".sub-menu-collection-page a").removeClass("active");
                   
                     
                    //alert(href);
                    if(href.indexOf("collection") >= 0) {
                        
                        $("nav .collection").addClass("active");
                        $(".main-menu .sub-menu").addClass("sub-menu-collection-page");
                        

                        //single collection
                        var hrefArray = href.split("/");
                        if(hrefArray.length >= 7) {                            
                            var modifiedSingleCollectionHref = '/'+hrefArray[3] + '-' + hrefArray[4];
                            href = modifiedSingleCollectionHref;

                        } // end single collection
                        

                        //removes / in the start and replaces / with -
                        var collectionHref = href.substring(1).replace('/', '-'); 
                        $("nav ." + collectionHref + "").addClass("active");
                        $("nav ." + collectionHref + " a").addClass("active");


                        
                    } else {
                        //console.log(href.indexOf("?page"));
                        
                        var modifiedHref = href.substring(1);
                        $("nav ." + modifiedHref + "").addClass("active");
                        $("nav ." + modifiedHref + " a").addClass("active");
                        $(".main-menu .sub-menu").removeClass("sub-menu-collection-page");
                        

                    }                    
                    

                    var $response = $(data);
                    var onlyContent = $response.find("#content").html();
                    $mainContent.css('display', 'none');
                    $mainContent.fadeIn().html(onlyContent);
                    
                    if(href == '/home') 
                       initOwl();  


                    $('.popup').magnificPopup({
                        type: 'image',
                        closeBtnInside: false,
                        mainClass: 'mfp-with-zoom mfp-img-mobile',           
                        image: {
                            verticalFit: true,
                
                        },          
                      
                        gallery: {
                          enabled: true 
                        },       
                    });                  



                    // })
                })
            }
            $(window).bind("popstate", function() {
                var _href = location.pathname.replace(/^.*[\\\/]/, '');
                loadContent(_href)
            })
        }
    })
})(jQuery);