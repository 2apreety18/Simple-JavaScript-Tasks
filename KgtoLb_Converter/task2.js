function myFunction() {
	var mySelect = document.getElementById("mySelect");
	var box = document.getElementById("outPut");
	var measure = document.getElementById("measure").value;

	box.innerHTML = mySelect.options[mySelect.selectedIndex].value;
	
	if (mySelect.selectedIndex ==0)  {
		box.innerHTML = measure*0.4536 + " kilograms";
	} else  {
		box.innerHTML = measure*2.2046 + " pounds";
	}
}