"use strict";
(function() {
	var startText;
	var myInterval;
	var speed = 250;

	CUSTOM = "       (((((((((((  *\n" +
		"   *   |||||||||||\n" +
		"      |:H:a:p:p:y:|   *\n" +
		"*   __|___________|__\n" +
		"   |^^^^^^^^^^^^^^^^^|  *\n" +
		"  *|:B:i:r:t:h:d:a:y:|\n" +
		" * |                 |\n" +
		"   ~~~~~~~~~~~~~~~~~~~  *\n" +
		"=====\n" +
		"       )))))))))))\n" +
		"       |||||||||||\n" +
		"      |:H:a:p:p:y:|\n" +
		"    __|___________|__\n" +
		"   |^^^^^^^^^^^^^^^^^|\n" +
		"   |:B:i:r:t:h:d:a:y:|\n" +
		"   |                 |\n" +
		"   ~~~~~~~~~~~~~~~~~~~\n";

	ANIMATIONS["Custom"] = ANIMATIONS["custom"] = ANIMATIONS["CUSTOM"] = CUSTOM;

	function start() {
		if (document.getElementById("speed").checked) speed = 50;
		document.getElementById("start").disabled = true;
		document.getElementById("animation").disabled = true;
		document.getElementById("stop").disabled = false;
		startText = document.getElementById("field").value;
		document.getElementById("field").innerHTML = "";
		var spl = "=====\n";
		var an = document.getElementById("animation").value;
		var anim = ANIMATIONS[an].split(spl);
		var i = 0;
		playAnim(speed);
		function playAnim(speed) {
			myInterval = setInterval(display, speed);
			function display() {
				document.getElementById("field").value = anim[i];
				if (i < anim.length - 1) i++;
				else i = 0;
			}
		}
		document.getElementById("speed").onchange = speedChange;
		function speedChange() {
			if (document.getElementById("speed").checked) speed = 50;
			else speed = 250;
			if (document.getElementById("start").disabled) {
				clearInterval(myInterval);
				playAnim(speed);
			}
		}

	}

	function stop() {
		document.getElementById("stop").disabled = true;
		document.getElementById("start").disabled = false;
		document.getElementById("animation").disabled = false;
		clearInterval(myInterval);
		document.getElementById("field").value = startText;
	}


	function animationDisplay() {
		var an = document.getElementById("animation").value;
		document.getElementById("field").value = ANIMATIONS[an];
	}

	function size() {
		document.getElementById("field").style.fontSize = document.getElementById("size").value;
	}

	window.onload = () => {
		document.getElementById("stop").disabled = true;
		document.getElementById("start").onclick = start;
		document.getElementById("stop").onclick = stop;
		document.getElementById("size").onchange = size;
		document.getElementById("animation").onchange = animationDisplay;
	};

})();
