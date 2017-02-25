$(function() {
	var w = $(window).width();

	//Адаптивный слайдер

	$(".header__slider-wrapper").owlCarousel({
		loop: true,
		items: 1,
		
		autoplay: true,
		navText: '<>',
		responsive : {
			900 : {
				nav:true,
			}
		}

	});

	// Перезагрузка страницы для сброса подключения скриптов слайдеров
   	$(window).resize(function(){
   		var w = $(window).width();
   		if (w < 769) {
   			$(".equipment__slider-wrapper").owlCarousel({

				loop: true,
				items: 1,
				autoplay: true,
				
			});
			$(".price__slider-1").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: '<>',
				
			});
			$(".price__slider-2").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: '<>',
				
			});
			$(".price__slider-3").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: '<>',
				
			});
			$(".personal__slider").owlCarousel({
				loop: true,
				items: 1,
				responsive : {
					481 : {
						items: 2,
					}
				}
			});

   		} if (w > 769) {

   	     $(".equipment__slider-wrapper").trigger('destroy.owl.carousel', [300]);
   	     $(".price__slider-1").trigger('destroy.owl.carousel', [300]);
   	     $(".price__slider-2").trigger('destroy.owl.carousel', [300]);
   	     $(".price__slider-3").trigger('destroy.owl.carousel', [300]);
   	     $(".personal__slider").trigger('destroy.owl.carousel', [300]);
			
   		}
   	});
   	
   	//Слайдеры активирующиеся при разрешении < 768px
   	$(document).ready( function(){
	   	if(w < 769) {
			$(".equipment__slider-wrapper").owlCarousel({

				loop: true,
				items: 1,
				autoplay: true,
				
			});
			$(".price__slider-1").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: '<>',
				
			});
			$(".price__slider-2").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: '<>',
				
			});
			$(".price__slider-3").owlCarousel({
				loop: true,
				items: 1,
				nav: true,
				navText: '<>',
				
			});
			$(".personal__slider").owlCarousel({
				loop: true,
				items: 1,
				responsive : {
					481 : {
						items: 2,
					}
				}
			});
		} 
	});

	$(".equipment__slider-nav-next").click(function(){
		$(".equipment__slider-wrapper").trigger("next.owl.carousel");
	});
	$(".equipment__slider-nav-prev").click(function(){
		$(".equipment__slider-wrapper").trigger("prev.owl.carousel");
	});

	

	//Выравнивание блоков по высоте

	$(".service__item").equalHeights();
	$(".personal__slider-item").equalHeights();
	$(".personal__slider-item-title h3").equalHeights();
	$(".personal__slider-item-title small").equalHeights();
	$(".personal__slider-item-text").equalHeights();
	$(".advantages__item").equalHeights();
	
	//popup

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	
	// scroll To Id
	$(document).ready(function(){
		//$("a[href*='#']").mPageScroll2id();
		$("a[href='#production']").mPageScroll2id();
		$("a[href='#equipment']").mPageScroll2id();
		$("a[href='#price']").mPageScroll2id();
		$("a[href='#advantages']").mPageScroll2id();
		$("a[href='#portfolio']").mPageScroll2id();
		$("a[href='#clients']").mPageScroll2id();
		$("a[href='#contacts']").mPageScroll2id();
	});
	
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//Yandex map
var myMap;

ymaps.ready(function () {
    myMap = new ymaps.Map('map', {
            center: [55.7526, 37.6619],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
       // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.7527, 37.6692]
            },
            
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

       // Создаем геообъект с типом геометрии "Точка".
        myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [54.883421, 37.234162]
            },
            
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

        myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.7527, 37.6692], {
            balloonContent: 'Нижняя Сыромятническая д. 10 стр. 8'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#e30613'
        }))
        .add(myGeoObject2)
        .add(new ymaps.Placemark([54.883421, 37.234162], {
            balloonContent: 'Наукоград Протвино (98 км от МКАД по Симферопольскому шоссе), Заводской проезд 7'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#e30613'
        }));


		$('.contacts__item-btn a').click(function() {
			//$('.contacts__box').eq(0).fadeOut(400);
			$('.contacts__map').addClass('active').css('z-index', 1);
			$('#map').css({
			    'z-index': '2' ,
			    'position': 'relative'
			   } );
			if($(this).hasClass('production')) {
				//myMap.setCenter([54.883421, 37.234162]);
				myMap.setZoom(9);
				myMap.panTo([54.883421, 37.234162], {flying: false, duration: 2000});
				//myMap.setZoom(15, {duration: 400})
			}else{
				myMap.setZoom(17);
				myMap.panTo([55.7527, 37.6692], {flying: false, duration: 400});
			}
			return false;
		});

});