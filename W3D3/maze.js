$(document).ready(function() {
	var start = false;
	$("#start").click(function() {
		start = true;
		$("#status").text("Game started, GOOD LUCK :D ");
		$(".boundary").removeClass("youlose");
	});
	$(".boundary").mouseover(function() {
		lose();
	});

	$("body").mouseover(function() {
		if (event.target.id != ("maze") && event.target.id != ("start") && event.target.id != ("end")) {
			lose();
		}
	});

	function lose() {
		if (start) {
			start = false;
			$("#status").text("You lose :(");
			$(".boundary").addClass("youlose");
		}
	}
	$("#end").mouseover(function() {
		if (start) {
			start = false;
			$("#status").text("You win :)");
		}
	});

});