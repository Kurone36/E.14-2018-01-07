function srednia() {
	var i1 = document.getElementById('i1').value;
	var i2 = document.getElementById('i2').value;
	var i3 = document.getElementById('i3').value;
	var wynik
	if (i1=="" || i2=="" || i3=="" || isNaN(i1) || isNaN(i2) || isNaN(i3)) {
		alert("Wpisz poprawne dane");
	}else {
		i1 = parseFloat(i1);
		i2 = parseFloat(i2);
		i3 = parseFloat(i3);
		wynik = (i1+i2+i3)/3;
	}
	console.log(wynik);
	document.getElementById("wynik").innerHTML=wynik;
}