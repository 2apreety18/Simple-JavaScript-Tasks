function myFunction(){
	var max = document.getElementById("max");
	var min = document.getElementById("min");
	var avg = document.getElementById("avg");
	var sum = document.getElementById("sum");
	var rev = document.getElementById("rev");
	var txt = document.getElementById("inPut").value;
	var arr = txt.split(",").map(Number);

	min.innerHTML = arr.reduce(function(a,b){
		return Math.min(a,b);
	})

	max.innerHTML = arr.reduce(function(a,b){
		return Math.max(a,b);
	})

	sum.innerHTML = arr.reduce(function(a,b){
		return (a + b);
	})

	avg.innerHTML = sum.innerHTML/arr.length;
	rev.innerHTML = arr.reverse();
}