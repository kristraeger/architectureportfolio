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

});