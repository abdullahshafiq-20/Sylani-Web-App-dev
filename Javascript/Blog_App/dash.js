window.addEventListener("DOMContentLoaded", function () {
    var uid=localStorage.getItem("uid");
    if(!uid)
    {
        window.location.href="index.html";
    }
    console.log(uid,"uid");
});
function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  window.readmore=readmore;
  
  document.getElementById('upload-btn').addEventListener('click', function(event) {
    // Prevent the default button behavior, which may be closing the modal
    event.preventDefault();
    
    // Trigger click on the hidden file input
    document.getElementById('file-input').click();
  });

  // Handle file selection
  document.getElementById('file-input').addEventListener('change', function() {
    // Access the selected file(s) using this.files
    var selectedFiles = this.files;
    
    // Display the file name
    var fileNameDisplay = document.getElementById('file-name');
    if (selectedFiles.length > 0) {
      fileNameDisplay.textContent = 'Selected File: ' + selectedFiles[0].name;
    } else {
      fileNameDisplay.textContent = 'No file selected';
    }

    // You can perform further actions with the selected file(s) here
    // For example, you may want to upload the file using AJAX or perform some validation.
  });
