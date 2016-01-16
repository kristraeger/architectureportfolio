$(document).ready(function() {
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

	//click project name and project slides in carousel start cycling with first item

	$('#projects .project-1-1').click(function() {
		$('.carousel-inner .project-1-1').removeClass('hide').addClass('item');
		$('#start1-1').addClass('active');
	});

	$('#projects .project-1-2').click(function() {
		$('.carousel-inner .project-1-2').removeClass('hide').addClass('item');
		$('#start1-2').addClass('active');
	});

	$('#projects .project-1-3').click(function() {
		$('.carousel-inner .project-1-3').removeClass('hide').addClass('item');
		$('#start1-3').addClass('active');
	});

	$('#projects .project-2-1').click(function() {
		$('.carousel-inner .project-2-1').removeClass('hide').addClass('item');
		$('#start2-1').addClass('active');
	});

	$('#projects .project-2-2').click(function() {
		$('.carousel-inner .project-2-2').removeClass('hide').addClass('item');
		$('#start2-2').addClass('active');
	});

	$('#projects .project-2-3').click(function() {
		$('.carousel-inner .project-2-3').removeClass('hide').addClass('item');
		$('#start2-3').addClass('active');
	});

	$('#projects .project-3-1').click(function() {
		$('.carousel-inner .project-3-1').removeClass('hide').addClass('item');
		$('#start3-1').addClass('active');
	});

	$('#projects .project-3-2').click(function() {
		$('.carousel-inner .project-3-2').removeClass('hide').addClass('item');
		$('#start3-2').addClass('active');
	});

	$('#projects .project-3-3').click(function() {
		$('.carousel-inner .project-3-3').removeClass('hide').addClass('item');
		$('#start3-2').addClass('active');
	});


});