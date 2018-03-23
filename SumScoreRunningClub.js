document.querySelector('table.sortable').id = 'myTable';

var oTable = document.getElementById('myTable');
var rowLength = oTable.rows.length;

var pink = 0.00;
var blue = 0.00;
//loops through rows    
for (i = 1; i < rowLength; i++){

	var oCells = oTable.rows.item(i).cells;

	var nameColumn = oCells.item(1).innerHTML;

	var distanceColumn = oCells.item(2).innerHTML; // Distance
	var indexOfTagKm = distanceColumn.indexOf('<abbr class="unit short" title="kilometers">km</abbr>');
	var totalKmPersonal = parseFloat(distanceColumn.substr(0, indexOfTagKm));

	if (nameColumn.indexOf("Pink") >= 0)
	{
		pink += totalKmPersonal;
	}
	else
	{
		blue += totalKmPersonal;
	}
}
var diff = Math.abs(pink - blue);
pink = pink.toFixed(2);
blue = blue.toFixed(2);
diff = diff.toFixed(2);

alert("Pink : " + pink + " km\nBlue : " + blue + " km\nDiff : " + diff + " km"); 