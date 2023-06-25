// Wait for the iframe to load
window.addEventListener('load', function() {
    // Get the iframe element
    var iframe = document.getElementById('googleForm');
  
    // Get the form inside the iframe
    var form = iframe.contentDocument.querySelector('form');
  
    // Listen for the form submit event
    form.addEventListener('submit', function(event) {
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the submitted form values
      var accountName = form.querySelector('input[name="entry.खाते_का_नाम"]').value;
      var notePadSlip = form.querySelector('input[name="entry.Note_Pad_Slip"]').value;
      var itemName = form.querySelector('input[name="entry.आइटम_का_नाम"]').value;
      var itemQuantity = form.querySelector('input[name="entry.जमा_हुई_आइटम्स_की_संख्या"]').value;
      var checkerName = form.querySelector('input[name="entry.चेक_करने_वाले_का_नाम"]').value;
      var slipMaker = form.querySelector('input[name="entry.Slip_Made_by"]').value;
  
      // Display the submitted information in the preview section
      document.getElementById('preview-account-name').textContent = accountName;
      document.getElementById('preview-note-pad-slip').textContent = notePadSlip;
      document.getElementById('preview-item-name').textContent = itemName;
      document.getElementById('preview-item-quantity').textContent = itemQuantity;
      document.getElementById('preview-checker-name').textContent = checkerName;
      document.getElementById('preview-slip-maker').textContent = slipMaker;
  
      // Show the preview section
      document.getElementById('previewSection').style.display = 'block';
    });
  
    // Listen for the click event of the print button
    var printButton = document.getElementById('printButton');
    printButton.addEventListener('click', function() {
      // Print the preview section
      window.print();
    });
  });
  