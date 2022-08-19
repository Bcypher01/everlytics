const getData = async () => {
  const data = await fetch("./data.json");
  return data.json();
};

(async () => {
  const tableRows = await getData();
  const actualData = tableRows.slice(1);

  const pageTable = document.getElementById("pageTable");

  // Populate Table Headers.
  const tableHead = pageTable.getElementsByTagName("thead")[0];
  const tableHeaderRow = tableHead.insertRow();
  const headings = tableRows[0];

  for (let heading of headings) {
    const newCell = tableHeaderRow.insertCell();
    const cellText = document.createTextNode(heading.replace(/_/g, " "));

    newCell.appendChild(cellText);
  }

  // Populate Table Rows.
  const tableBody = pageTable.getElementsByTagName("tbody")[0];

  for (let i = 0; i < actualData.length; i++) {
    const tr = tableBody.insertRow();

    for (let cell of actualData[i]) {
      const newCell = tr.insertCell();
      const cellText = document.createTextNode(cell);

      newCell.appendChild(cellText);
    }
  }
})();
