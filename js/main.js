$(document).ready(function(){
	/* -- dropdown in main nav --*/
	$('.list-nav li').hover(function(){
		var dropdown = $(this).data('dropdown');
		$(this).parents('#main-nav').addClass(dropdown);

	},function(){
		var dropdown = $(this).data('dropdown');
		$(this).parents('#main-nav').removeClass(dropdown);
	});

	$('#main-nav .dropdown').hover(function(){
		var list_nav = $(this).data('listNav');
		$('.list-nav li').find(list_nav).parents('li').addClass('active');
	},function(){
		var list_nav = $(this).data('listNav');
		$('.list-nav li').find(list_nav).parents('li').removeClass('active');
	});

	/* -- main-slider --*/
	var owl_main = $("#main-slider"),
		slider = $('#beast-deals,.product-slider');

	owl_main.owlCarousel({
		slideSpeed: 1500,
		paginationSpeed: 1500,
		rewindSpeed: 1500,
		singleItem: true,
		autoPlay: 10000,
		addClassActive: true,
		navigation : true

	});

	slider.owlCarousel({
		slideSpeed: 1000,
		paginationSpeed: 1000,
		rewindSpeed: 1000,
		autoPlay: 20000,
		addClassActive: true,
		navigation : true,
		items:4,
		margin:10
	});

	/* -- tabs --*/

	$('.tab-nav a').click(function(e){
		e.preventDefault();

		var tab = $(this).data('tab'),
			tab_group = $(this).data('groupTab');

		$(this).addClass('active').siblings().removeClass('active');
		$(tab_group).removeClass('active');
		$(tab).addClass('active');
	});

	$('#catalog-view a.line').click(function(e){
		e.preventDefault();

		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
		$('#catalog-list').addClass('line');
	});

	$('#catalog-view a.block').click(function(e){
		e.preventDefault();

		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
		$('#catalog-list').removeClass('line');
	});

	/* -- .go-top --*/

	$('.go-top a').click(function(e){
		e.preventDefault();

		$('html,body').animate({scrollTop:0},1000);
	});

	/* -- info-block - more info--*/

	$('.info-block .yellow-btn').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active').siblings('.more-info').slideToggle(500);
	});

	/* -- #sorting --*/

	$('#sorting li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$('#sorting li a').click(function(e){e.preventDefault();});

	/* -- popup -- */

	$('.popup-btn').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$('.photo-popup-btn').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		},
		wrapCSS : 'photo-popup' 
	});

	$('.video-popup-btn').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			},
			media : {}
		},
		wrapCSS : 'photo-popup' 
	});

	$(".order-btn").click(function() {
   		$.fancybox( {
   			href : '#processed-order', 
   			padding : 0, 

			helpers: {
				overlay: {
					locked: false
				}
			}
   		} );
  	});

	/* -- number --*/

	$('.number a.up').click(function(){
		var num = $(this).siblings('.number input[type="text"]').val();

		$(this).siblings('.number input[type="text"]').val(parseInt(num) + 1);
	});

	$('.number a.down').click(function(){
		var num = $(this).siblings('.number input[type="text"]').val();

		if(num > 1) {
			$(this).siblings('.number input[type="text"]').val(parseInt(num) - 1);
		}else {
			num =1;
		}
	});

	/* -- form styler -- */

	$('input, select').styler(); 

	/* -- acardion in faq --*/

	$('.acardion-btn').click(function(e){
		e.preventDefault();
		$(this).siblings('div').slideToggle();
		$(this).parents('li').siblings().find('div').slideUp();
	});

	/* -- massage-block --*/
	$('.massage-block .close').click(function(e){
		e.preventDefault();
		$(this).parents('.massage-block').fadeOut();
	});
});

