/* Arrows
 = $("<img src='./arrows/arrowLeft.gif'/>");
 = $("<img src='./arrows/arrowRight.gif'/>");
$("<img src='./arrows/arrowUp.gif'/>");
= $("<img src='./arrows/arrowDown.gif'/>");
*/


// 'notes' to store Arrows  
var notes = [];


// ==== CLASS FOR ARROWS ==== //

// 1. Direction of arrows
// 2. jQuery img that links to direction bottom
// 3. Destroy when it arrow gets to the 
// 4. Explode when arrow gets to the bottom

// Class Arrow
function Arrow(direction) {

	this.direction = direction;
	this.image = $("<img src='./arrows/" + direction + ".gif'/>");

}// ends CLASS Arrow


// Instantiate Arrows //

var leftArrow = new Arrow("left");

var rightArrow = new Arrow("right");

var upArrow = new Arrow("up");

var downArrow = new Arrow("down");




// For random arrows
var randNum = 0;

var frame = 0;

var arrowSpawnRate = 40;


// Random generator for arrows
function randomGen() {

	// Randomizes between 1 and 4
	randNum = Math.floor(Math.random() * 4) + 1;

	if (randNum === 1) {
		console.log("left");
		notes.push(leftArrow);

	}
	if (randNum === 2) {
		console.log("right");
		notes.push(rightArrow);

	}
	if (randNum === 3) {
		console.log("up");
		notes.push(upArrow);
		
	}
	if (randNum === 4) {
		console.log("down");
		notes.push(downArrow);

	}

}// ends randomGen()


// jQuery to animate arrows //
$(document).ready(function () {


	// Render function //
	function render() {

		if (frame++ % arrowSpawnRate === 0) {

			randomGen();

			$('.stage').append(notes);
			


		}

	}// ends render()


	// Listening for when the key is pressed
	$(document).keyup(function(event){
		
		if (event.keyCode == 40) {

			console.log("down");

		}

		if (event.keyCode == 38) {

			console.log("up");

		}

		if (event.keyCode == 37) {

			console.log("left");

		}

		if (event.keyCode == 39) {

			console.log("right");

		}

	});


	// shim layer with setTimeout fallback
	window.requestAnimFrame = (function() {

		return window.requestAnimationFrame ||

		window.webkitRequestAnimationFrame ||

		window.mozRequestAnimationFrame ||

		function(callback) {

			window.setTimeout(callback, 1000 / 75);

		};

	})();

	/*	place the rAF *before* the render() 
		to assure as close to 60fps with the 
		setTimeout fallback.					*/

	// usage: instead of setInterval(render, 16) ....

	(function animloop() {

		requestAnimFrame(animloop);

		render();


	})();// ends (function animloop() )

});// ends $(doc).ready