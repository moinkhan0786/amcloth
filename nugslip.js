function fetchSheetData() {
    var sheetId = '1N79yQG88iYPhMiHzKiM07CrxNMGzeg6p00apVYu6l5g';
    var sheetName = 'NUG JAMA';
    var apiKey = 'AIzaSyAE--GAox2E7bcrXU9JSvp-O903FJ9X86c';
  
    var query = encodeURIComponent(`SELECT * WHERE A = '${document.getElementById('slip-number').value}'`);
    var url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tq=${query}&key=${apiKey}`;
  
    fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(data) {
        var json = JSON.parse(data.match(/(?<=\()\[.*\](?=\);)/s)[0]);
        if (json.table && json.table.rows.length > 0) {
          var rows = json.table.rows;
          displaySheetData(rows);
        } else {
          displayErrorMessage('No data available.');
        }
      })
      .catch(function(error) {
        displayErrorMessage('Error fetching data: ' + error);
      });
  }
  
  function displaySheetData(rows) {
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = '';
  
    if (rows && rows.length > 0) {
      var table = document.createElement('table');
      var tableHeader = document.createElement('thead');
      var tableBody = document.createElement('tbody');
  
      // Add table header row
      var headerRow = document.createElement('tr');
      var headers = rows[0].c;
      for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement('th');
        headerCell.textContent = headers[i].label;
        headerRow.appendChild(headerCell);
      }
      tableHeader.appendChild(headerRow);
      table.appendChild(tableHeader);
  
      // Find the row with the matching slip number
      var rowData = null;
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (row.c[0].v == 1) { // Assuming the slip number is in the first column (A)
          rowData = row.c;
          break;
        }
      }
  
      if (rowData) {
        // Create a single row with the corresponding data
        var tableRow = document.createElement('tr');
        for (var j = 0; j < rowData.length; j++) {
          var tableCell = document.createElement('td');
          tableCell.textContent = rowData[j].v;
          tableRow.appendChild(tableCell);
        }
        tableBody.appendChild(tableRow);
      } else {
        displayErrorMessage('No data available for the entered slip number.');
      }
  
      table.appendChild(tableBody);
      outputElement.appendChild(table);
    } else {
      displayErrorMessage('No data available.');
    }
    if (rowData) {
        // Create a single row with the corresponding data
        var tableRow = document.createElement('tr');
        for (var j = 0; j < rowData.length; j++) {
          var tableCell = document.createElement('td');
          tableCell.textContent = rowData[j].v;
          tableRow.appendChild(tableCell);
        }
        tableBody.appendChild(tableRow);
      } else {
        displayErrorMessage('No data available for the entered slip number.');
      }
      
  }
  
  
  function displayErrorMessage(message) {
    var outputElement = document.getElementById('output');
    outputElement.innerHTML = '<p class="error-message">' + message + '</p>';
  }
  
  function init() {
    var searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', fetchSheetData);
  }
  
  window.addEventListener('load', init);
  