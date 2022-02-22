function populateTable() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(2);
  for (i = 0; i < 8; i++) {
    row.insertCell(i);
  }
}