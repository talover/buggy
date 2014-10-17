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
		deal_slider = $('#beast-deals');

	owl_main.owlCarousel({
		slideSpeed: 1500,
		paginationSpeed: 1500,
		rewindSpeed: 1500,
		singleItem: true,
		autoPlay: 10000,
		addClassActive: true,
		navigation : true

	});

	deal_slider.owlCarousel({
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
});
