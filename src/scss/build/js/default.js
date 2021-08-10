	
	$('.submenu').hide();
	$('.accordion-submenu').on('click', function(){
			$(this).next().slideToggle("slow");
	});

	//product page quantity input
		$('<div class="quantity-nav quantity-up"><div class="quantity-button">+</div></div><div class="quantity-nav quantity-down"><div class="quantity-button">-</div></div>').insertAfter('.quantity input');
		$('#quantity').each(function() {
			var spinner	= $(this),
				input 	= spinner.find('input[type="number"]'),
				btnUp	= spinner.find('.quantity-up'),
				btnDown = spinner.find('.quantity-down'),
				min		= input.attr('min'),
				max		= input.attr('max');//selected classes

			btnUp.click(function() {//quantitty up trigger
				var oldValue = parseFloat(input.val());

				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});

			btnDown.click(function() {//quantitty down trigger
				var oldValue = parseFloat(input.val());

				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
	    });

	//simple slider
        setInterval(function(){
			 var $activeSlide = $(".slide.active"),
				 $nextSlide = $activeSlide.next(".slide").length != 0 ? $activeSlide.next(".slide") : $(".slide:first-child");
				 //console.log($nextSlide);
				 gotoSlide($activeSlide, $nextSlide, "inactiveLeft");
        },10000);

		var $slider = $(".slider"), $bullets = $(".bullets");

		function calculateHeight(){
			//16/9
			var aspect_ratio = 9/21;

			var topHeight = $("header").outerHeight();
			
			var slider_width = $(window).width();
			var slider_height = aspect_ratio * slider_width;

			if(slider_height > 450){
				console.log(slider_height);
				$slider.height(slider_height - topHeight);
				$(".full-page-slider").height(slider_height - topHeight);
				console.log(slider_height);
			}					
		}
		
		function resetSlides(){
			$(".slide.inactive").removeClass("inactiveRight").removeClass("inactiveLeft");
		}

		function gotoSlide($activeSlide, $slide, className){
			 $activeSlide.removeClass("active").addClass("inactive "+className);
			 $slide.removeClass("inactive").addClass("active");

			 resetBullets();
			 setTimeout(resetSlides, 300);
		}

		$(".next").on("click", function(){
			 var $activeSlide = $(".package-slider .slide.active"),
				 $nextSlide = $activeSlide.next(".package-slider .slide").length != 0 ? $activeSlide.next(".package-slider .slide") : $(".package-slider .slide:first-child");
				 console.log($nextSlide);
				 gotoSlide($activeSlide, $nextSlide, "inactiveLeft");
		});
		$(".previous").on("click",  function(){
			 var $activeSlide = $(".package-slider .slide.active"),
				 $prevSlide = $activeSlide.prev(".package-slider .slide").length != 0 ? $activeSlide.prev(".package-slider .slide") : $(".package-slider .slide:last-child");

				 gotoSlide($activeSlide, $prevSlide, "inactiveRight");
		});
		$(document).on("click", ".top-slider .bullet", function(){
			if($(this).hasClass("active")){
				return;
			}
			var $activeSlide = $(".top-slider .slide.active");
			var currentIndex = $activeSlide.index();
			var targetIndex = $(this).index();
			console.log(currentIndex, targetIndex);
			var $theSlide = $(".top-slider .slide:nth-child("+(targetIndex+1)+")");
			gotoSlide($activeSlide, $theSlide, currentIndex > targetIndex ? "inactiveRight" : "inactiveLeft");
		})
		function resetBullets(){
			$(".top-slider .bullet.active").removeClass("active");
			var index = $(".top-slider .slide.active").index()+1;
			//console.log(index);
			$(".top-slider .bullet:nth-child("+index+")").addClass("active");
		}
	//simple slider-end

	// Open modal in AJAX callback
	$.manualAjax = function(url) {
		$(".modal").blur();
		$.get(url, function(html) {
			$(html).appendTo('body').modal();
		});
	};

	//custom package - select item
		$.selectItem = function (skuID, catID) {
			var productPrice = $("#"+catID+" #"+skuID+" .price").attr("data-product-price");
			var selectedProduct = $("#"+catID+" .selected-product").attr("id");

			if ($("#"+catID+" .product-wrapper").is("#"+catID+" .selected-product") && selectedProduct != skuID) {
				$("#"+catID+" .product-wrapper.selected-product").removeClass("selected-product");
				$("#"+catID+" #"+skuID).addClass("selected-product");

				$("#"+catID+" .product-wrapper .add-package.active-package").empty();
				$("#"+catID+" .product-wrapper .add-package.active-package").append("EKLE");
				$("#"+catID+" .product-wrapper .add-package.active-package").removeClass("active-package");

				$("#"+catID+" #"+skuID+" .add-package").empty();
				$("#"+catID+" #"+skuID+" .add-package").append("ÇIKAR");
				$("#"+catID+" #"+skuID+" .add-package").addClass("active-package");
				
				$("#more-btn-wrapper").removeClass("passive");
				$("#more-btn-wrapper button").prop("disabled", false);
			} else if ($("#"+catID+" .product-wrapper").is("#"+catID+" .selected-product") && selectedProduct == skuID) {

				$("#"+catID+" #"+skuID+" .add-package").empty();
				$("#"+catID+" #"+skuID+" .add-package").append("EKLE");
				$("#"+catID+" #"+skuID+" .add-package").removeClass("active-package");

				$("#"+catID+" .selected-product").removeClass("selected-product");
				
				$("#more-btn-wrapper").addClass("passive");
				$("#more-btn-wrapper button").prop("disabled", true);
			} else {
				$("#"+catID+" #"+skuID).addClass("selected-product");

				$("#"+catID+" #"+skuID+" .add-package").empty();
				$("#"+catID+" #"+skuID+" .add-package").append("ÇIKAR");
				$("#"+catID+" #"+skuID+" .add-package").addClass("active-package");
				
				$("#more-btn-wrapper").removeClass("passive");
				$("#more-btn-wrapper button").prop("disabled", false);

			}
		};

	//filtering search steps control
	$('.filter-selective').select2();
	//$(".select-group.passive select").prop("disabled", true);
	$('.package-product-list').hide();
	$(document).on('select2:select', ".filter-selective", function () {
		var val 		= this.value;
		var listName	= $(this).attr('data-list-name');

			if (listName == "cat-1") {
				//$("#model-wrapper").removeClass("passive");
				//$("#model-wrapper select").prop("disabled", false);
				$("#"+listName).show();
				console.log(val);
			} else if (listName == "cat-2") {
				$("#"+listName).show();
			} else if (listName == "cat-3") {
				$("#"+listName).show();
			}
	});

	//masks
	$('#email').mask("A", {
		translation: {
			"A": { pattern: /[\w@\-.+]/, recursive: true }
		}
	});

	$('#date').mask('00/00/0000');
	$('#tel').mask('+90 (000) 000-00-00');
	$('#mobile').mask('+90 (000) 000-00-00');
	$('#expiry').mask('00/0000');

	//accordions
	//basket accordion
	var animTime 	= 300,
		clickPolice = false;

	$.basketAccordion = function(cart_id) {
		if($(".information-btn-" + cart_id).is(".passive")){
			clickPolice = true;

			$(".information-btn-" + cart_id).addClass('selected');
			$(".information-btn-" + cart_id).removeClass('passive');
			var currIndex = $(".information-btn-" + cart_id).index('.information-btn-' + cart_id),
			targetHeight = $('.item-small-details-' + cart_id).eq(currIndex).outerHeight();

			$('.basket-item-footer-' + cart_id).stop().animate({ height: 0 }, animTime);
			$('.basket-item-footer-' + cart_id).eq(currIndex).stop().animate({ height: targetHeight }, animTime);

			setTimeout(function(){ clickPolice = false; }, animTime);
		} else if($(".information-btn-" + cart_id).is(".selected")){
			clickPolice = false;

			$(".information-btn-" + cart_id).addClass('passive');
			$(".information-btn-" + cart_id).removeClass('selected');
			var currIndex = $(".information-btn-" + cart_id).index('.information-btn-' + cart_id),
			targetHeight = $('.item-small-details-' + cart_id).eq(currIndex).outerHeight();

			$('.basket-item-footer-' + cart_id).stop().animate({ height: 0 }, animTime);

			setTimeout(function(){ clickPolice = true; }, animTime);
		}
	}

	//menu accordion
	$('.cat-dropdown-menu').hide();
	$('.dropdown-cat').on('click', function(){
		$(this).next().slideToggle("slow");
	})

	//payment accordion
		var animTime = 300,
		clickPolice = false;

		$(document).on('touchstart click', '.acc-btn', function(){
			if(!clickPolice){
				clickPolice = true;

				var currIndex = $(this).index('.acc-btn'),
				targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

				$('.acc-btn').removeClass('selected');
				$(this).addClass('selected');

				$('.acc-content').stop().css({'height' : 0, 'overflow':'hidden' });
				$('.acc-content').eq(currIndex).stop().css({ 'height' : targetHeight+'px', 'overflow':'inherit' });
				console.log(targetHeight);

				setTimeout(function(){ clickPolice = false; }, animTime);
			}
		});

	//scroll up-down control
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.mobile-footer-menu').outerHeight();

		$(window).scroll(function(event){
		    didScroll = true;
		});

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;
		    
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
		        $('.mobile-footer-menu').removeClass('nav-down').addClass('nav-up');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $('.mobile-footer-menu').removeClass('nav-up').addClass('nav-down');
		        }
		    }
		    
		    lastScrollTop = st;
		}

	//open-close mobile menu
		$('.mobile-menu-bar').click(function(){
			$(".mobile-menu").css({"left": "0", "animation-name": "bounceIn"});
			$('.mobile-footer-menu').removeClass('nav-down').addClass('nav-up');
			$("body").css("overflow", "hidden");
		});
		$('.close-menu').click(function(){
			$(".mobile-menu").css({"left": "-310px", "animation-name": "inherit"});
	        $('.mobile-footer-menu').removeClass('nav-up').addClass('nav-down');
			$("body").css("overflow", "auto");
		});
		$('.shopping-cart-button > a.mobile-link').click(function(){
			$(".shopping-cart-dropdown").css({ "opacity": "1",  "visibility": "visible", "display": "block" });
		});
		$('.close-shopping-cart').click(function(){
			$(".shopping-cart-dropdown").css({ "opacity": "1",  "visibility": "visible", "display": "none" });
		})

	//simple tabs
		$('ul#tab-nav li, .read-more').click(function(){
			var tab_id = $(this).attr('data-tab'); //get tab id

			$('ul#tab-nav li').removeClass('current');//remove current class
			$('.detail-tab-content').removeClass('current');//remove current class

			$(this).addClass('current');//add current tabs
			$("#"+tab_id).addClass('current');//add current tabs
		});

	//toaster
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": false,
			"progressBar": true,
			"positionClass": "toast-top-full-width",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}

		$.getToaster = function (type, message, title = "") {
			toastr[type](message, title);
		}
	//toaster end

	
	$(".gallerybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});


	// Show the first tab by default
		$('.tabs-stage > div > .flex-grid.flex-space-between').hide();
		$('.tabs-stage > div').removeClass("active-stage");
		$('.tabs-stage > div:first').addClass("active-stage");
		$('.tabs-stage > div:first > .flex-grid.flex-space-between').show();
		$('.tabs-nav li:first').addClass('tab-active');

		// Change tab class and display content
		$('.tabs-nav a').on('click', function(event){
			event.preventDefault();
			$('.tabs-nav li').removeClass('tab-active');
			$(this).parent().addClass('tab-active');
			$('.tabs-stage > div').removeClass("active-stage");
			$('.tabs-stage > div > .flex-grid.flex-space-between').hide();
			$($(this).attr('href')).addClass("active-stage");
			$($(this).attr('href') + " > .flex-grid.flex-space-between").show();
		});

	//product page
		// define the gallery object
		var $gallery = $('#gallery_01');

		// Build array of objects to open in Fancybox.
		var $imgs = [];
		$('a', $gallery).each(function() {
			$imgs.push({'src': $(this).data('zoom-image')});
		});

		// Initiate ElevateZoom
		$("#zoom").elevateZoom({
			gallery: $gallery.attr('id'),
			cursor: 'pointer',
			galleryActiveClass: 'active',
			responsive: true,
			imageCrossfade: true,
			loadingIcon: 'images/source.gif'
		});

		// Bind Fancybox to clicking the zoom image.
		// Open it to the currently active index.
		$("#zoom").on("click", function(e) {
			e.preventDefault();
			var active_index = $('a.active', $gallery).index();
			$.fancybox.open($imgs, false, active_index);
		});