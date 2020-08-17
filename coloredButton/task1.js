function redColor() {
		document.getElementById("textBg").style.background= "#ff8c00";

		document.getElementById("textBg").style.color = "#ffff00";

	}
	function greenColor() {
		document.getElementById("textBg").style.background="#9acd32";
		document.getElementById("textBg").style.color = "Black";
	}
	function yellowColor(){
		document.getElementById("textBg").style.background="#ffff00";

		document.getElementById("textBg").style.color = "#ff8c00";
	}
	function blueColor(){
		document.getElementById("textBg").style.background="#00bfff";

		document.getElementById("textBg").style.color = "white";
	}

var quote = [

'The flower that blooms in adversity is the most rare and beautiful of them all.',
'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
'But better to get hurt by the truth than comforted with a lie.',
'There is only one thing that makes a dream impossible to achieve: the fear of failure.'
]


function newQuote() {
		var randomNumber  = Math.floor(Math.random()* (quote.length));
		document.getElementById("textBg").innerHTML = quote[randomNumber];
	}


