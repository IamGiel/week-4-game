
  

//set our variables

var numberToMatch = Math.floor(Math.random() * 103) + 19;
// var c1Array = [12,4,6];
// var c2Array = [14,10,3];
// var c3Array = [7,5,9];
// var c4Array = [6,2,5];
var crystalArr = [crystal1, crystal2, crystal3, crystal4];
for (var i = 0; i < crystalArr.length; i++){
		crystalArr[i] = Math.floor(Math.random() * 12) + 1;
		console.log(crystalArr[i]);

	}


// var crystal1 = Math.floor(Math.random() * 12) + 1;	//random generated number, from an arrary of choices;
// var crystal2 = Math.floor(Math.random() * 12) + 1;	 
// var crystal3 = Math.floor(Math.random() * 12) + 1;
// var crystal4 = Math.floor(Math.random() * 12) + 1;	

var score = 0;
var tempScore = 0;
var wins = 0;
var loss = 0;
var arguement1 = [];//push the values here, return to string, then add as integer

var newScore;
var sum;



// if each crystal will icrement the same number, 
// the random number should be asigned to each crystal 
// and is given a new number to increment at the beginning of a new game.
console.log("Number to match: "+ numberToMatch);
console.log("scoreTracker: " + score);
// console.log("crystal1: " + crystalArr[0]);//1
// console.log("crystal2: " + crystalArr[1]);//2
// console.log("crystal3: " + crystalArr[2]);//3
// console.log("crystal4: " + crystalArr[3]);//4
console.log(arguement1);

 
function clickListener() {
	addEventListener("click", function() {
    console.log("You clicked!");
  });
} 
function resetButton() {//appends the button with attributes
	var resetButton = $("<button>");
	resetButton.addClass("letter-button letter letter-button-color");
	resetButton.text("reset");
	$("#gameStatus").append(resetButton);

}

	
$("#gameStatus").on("click", function(){//reset function
	
	$(".letter-button").remove();
	// $("#gameStatus").remove();
	$("#win").text("");

	
	
	document.getElementById('crystal1').style.pointerEvents = 'auto'; 
	document.getElementById('crystal2').style.pointerEvents = 'auto'; 
	document.getElementById('crystal3').style.pointerEvents = 'auto'; 
	document.getElementById('crystal4').style.pointerEvents = 'auto'; 



	arguement1 = [];
	numberToMatch = Math.floor(Math.random() * 120) + 30;
	$("#scoreToMatch").text(numberToMatch);

	// var c1Array = [5,17,3];
	// var c2Array = [6,11,12];
	// var c3Array = [3,9,14];
	// var c4Array = [8,10,2];
	var crystalArr = [crystal1, crystal2, crystal3, crystal4];
	for (var i = 0; i < crystalArr.length; i++){
		crystalArr[i] = Math.floor(Math.random() * 12) + 1;
		console.log(crystalArr[i]);

	} 

	crystalArr[i];
	
	console.log("Number to match: "+ numberToMatch);
	console.log("scoreTracker: " + score);
	
	console.log(arguement1);
	newScore = numberToMatch - numberToMatch;
	document.getElementById("score").innerHTML = newScore;

	console.log("new number to match: " + numberToMatch);
});


function adder () {//sums up arguement1 array / adds elements in the array
		
		sum = arguement1.reduce(add, 0);

		function add(a,b) {
		    return parseInt(a) + parseInt(b);//aha!!!!	
		}
		console.log(sum);	
		document.getElementById("score").innerHTML = sum;

	 	//displays winner and increments the scores
		if (numberToMatch === sum){
			document.getElementById("win").innerHTML = "WINNER!";
			wins++;
			document.getElementById("plus").innerHTML = wins;
			resetButton();
			disableClicks();
		} else if (sum > numberToMatch){
			document.getElementById("win").innerHTML = "Try Again";
		    loss++;
		    resetButton();
		    disableClicks();
			document.getElementById("minus").innerHTML = loss;

		  } else {
		  	// nothing to do here
		  }
		 
	}

	function disableClicks() {
			
		
		// To disable:
		for (var i = 0; i < crystalArr.length; i++){
			crystalArr[i];
			console.log(crystalArr[i]);

		}
			crystalArr[i] = 0;
			console.log(crystalArr[0]);
			// crystalArr[0].style.pointerEvents = 'auto'; 
    
		document.getElementById('crystal1').style.pointerEvents = 'none';
		document.getElementById('crystal2').style.pointerEvents = 'none';
		document.getElementById('crystal3').style.pointerEvents = 'none';
		document.getElementById('crystal4').style.pointerEvents = 'none';
		
		}
		
		

//game initializes onload    
function start(){
	$("#test").text("Crystal Collector Game");
	$("#scoreToMatch").text(numberToMatch);
	console.log("original: " + numberToMatch);
};
//crystal divs on click
$("#crystal1").on("click", function(){
	$("#crystal1").val(crystalArr[0]); //setvalue to crystal1
	arguement1.push($(this).val());
	adder();

});
$("#crystal2").on("click", function(){
	$("#crystal2").val(crystalArr[1]); //setvalue to crystal2
	arguement1.push($(this).val());	
	adder();
});

$("#crystal3").on("click", function(){
	$("#crystal3").val(crystalArr[2]); //setvalue to crystal3
	arguement1.push($(this).val());	
	adder();
});

$("#crystal4").on("click", function(){
	$("#crystal4").val(crystalArr[3]); //setvalue to crystal4
	arguement1.push($(this).val());	
	adder();
});


 

//reset button
// $("#foo").on("click", function() {
// //set score = 0;
// //call start();
// //remove the tempScore and restart to 0.
// //all crystals to reset their values to random.
// $("#scoreToMatch").text(numberToMatch);
// $("#score").text(score);
// });

//note to self:

//the reset button needs to stop re-appending
//the reset button needs to reset the tempScore =0.
//crystals need to reset their values
//the start 

// $("body").on("click", "#foo", function(event)
// {
//     //Prevent any default behaviour, we're dealing with this ourselves
//     event.preventDefault();
//     //First, disable the button
//     $("foo").attr("disabled", "disabled");
//     //Then, make your ajax call
//     $.ajax(
//     {
//         url: "http://example.com",
//         success: function(data)
//         {
//             //When your ajax call returns, enable the button again
//             $("your_button_selector").removeAttr("disabled");
//         }
//     });
// });












