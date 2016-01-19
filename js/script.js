$(document).ready(function() {

	// INITIAL EVENTS 

		//initially, start gallery with all photos of .start

	$('.carousel-inner .start').removeClass('hide').addClass('item');
	$('#start1-3').addClass('active');
	$('#carouselMeta .project-0').removeClass('hide');


	// HOVER EVENTS

		//highlight specific .group-name when hover specific.project-group

	$('#projectGroup1 li a').hover(function() {
		$('#groupName1').toggleClass('highlight');
	});
	$('#projectGroup2 li a').hover(function() {
		$('#groupName2').toggleClass('highlight');
	});
	$('#projectGroup3 li a').hover(function() {
		$('#groupName3').toggleClass('highlight');
	});

	// 	// when hover over project names, stop gallery on mouseenter, start gallery when mouseleave

	// $('.project-group li a').mouseenter(function() {
	// 	$('.carousel-inner .start').addClass('hide').removeClass('item').removeClass('active');
	// 	$('#carouselMeta .project-0').addClass('hide');
	// });

	// $('.project-group li a').mouseleave(function() {
	// 	$('.carousel-inner .start').removeClass('hide').addClass('item');
	// 	$('#start1-3').addClass('active');
	// 	$('#carouselMeta .project-0').removeClass('hide');
	// });

	// 	// when hover over project name, show first slide and project meta info

	// $('#projects .project-1-1').hover(function() {
	// 	$('#start1-1').toggleClass('hide').toggleClass('item').toggleClass('active'); 
	// 	$('#carouselMeta .project-1-1').toggleClass('hide');
	// });

	// $('#projects .project-1-2').hover(function() {
	// 	$('#start1-2').toggleClass('hide').toggleClass('item').toggleClass('active'); 
	// 	$('#carouselMeta .project-1-2').toggleClass('hide');
	// });

	// $('#projects .project-1-3').hover(function() {
	// 	$('#start1-3').toggleClass('hide').toggleClass('item').toggleClass('active'); 
	// 	$('#carouselMeta .project-1-3').toggleClass('hide');
	// });

	//when any of the project names is clicked, remove .item class and .active class from all projects, add .hide

	$('.project-group li a').click(function() {
		$('.project-group li a').removeClass('project-clicked');
		$('.carousel-inner > div').removeClass('active').removeClass('item').addClass('hide');
		$('#carouselMeta > div').addClass('hide');
	});

	//click project name, start carousel with corresponding project slides, highlight project name, show project meta info

	$('#projects .project-1-1').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-1-1').removeClass('hide').addClass('item');
		$('#start1-1').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-1-1').removeClass('hide');
	});

	$('#projects .project-1-2').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-1-2').removeClass('hide').addClass('item');
		$('#start1-2').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-1-2').removeClass('hide');
	});

	$('#projects .project-1-3').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-1-3').removeClass('hide').addClass('item');
		$('#start1-3').addClass('active');
		$(this).addClass('project-clicked');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-1-3').removeClass('hide');
	});

	$('#projects .project-2-1').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-2-1').removeClass('hide').addClass('item');
		$('#start2-1').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-2-1').removeClass('hide');
	});

	$('#projects .project-2-2').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-2-2').removeClass('hide').addClass('item');
		$('#start2-2').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-2-2').removeClass('hide');
	});

	$('#projects .project-2-3').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-2-3').removeClass('hide').addClass('item');
		$('#start2-3').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-2-3').removeClass('hide');
	});

	$('#projects .project-3-1').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-3-1').removeClass('hide').addClass('item');
		$('#start3-1').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-3-1').removeClass('hide');
	});

	$('#projects .project-3-2').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-3-2').removeClass('hide').addClass('item');
		$('#start3-2').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-3-2').removeClass('hide');
	});

	$('#projects .project-3-3').click(function() {
		$(this).addClass('project-clicked');
		$('.carousel-inner .project-3-3').removeClass('hide').addClass('item');
		$('#start3-3').addClass('active');
		$('#controls').removeClass('hide');
		$('#carouselMeta .project-3-3').removeClass('hide');
	});


});