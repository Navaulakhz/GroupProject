document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('sign-in-form');
    const cardNumberInput = document.getElementById('cardNumber');
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');
  
    // Password toggle visibility handler
    showPasswordCheckbox.addEventListener('change', (event) => {
      passwordInput.type = event.target.checked ? 'text' : 'password';
    });
  
    // Form submission handler
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submit action
  
      // Check if the form has any invalid inputs
      if (!signInForm.checkValidity()) {
        signInForm.reportValidity(); // This will show the browser's default error messages
        return; // Stop the form from submitting
      }
  
      // If all checks pass, submit the form
      // Here you would typically send a request to the server
      // For example, using fetch() or XMLHttpRequest (not included here)
      
      console.log('Form is valid, send request to server.');
      // Example: fetch('/login', {method: 'POST', body: new FormData(signInForm)});
    });
    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
      
        // Password Validation
        const password = passwordInput.value;
        if (!validatePassword(password)) {
          // Show an error message or highlight the password field
          alert("Password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters");
          return;
        }
      
        // Rest of your code...
      });
      
      function validatePassword(password) {
        // Regular expression for password validation
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
      }
      
  });
  
  document.getElementById('select-all').addEventListener('click', function(event) {
    var checkboxes = document.getElementsByClassName('bill-checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = this.checked;
    }
  });

  document.getElementById('select-all').addEventListener('click', function(event) {
    var checkboxes = document.querySelectorAll('.bill-checkbox');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = event.target.checked;
    });
  });
  document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here you would typically gather the form data
    var iban = document.getElementById('beneficiary-iban').value;
    var amount = document.getElementById('amount').value;
    var transferDate = document.getElementById('transfer-date').value;
    
    // And then send it to the server via AJAX or fetch API
    console.log('Transfer to IBAN:', iban, 'Amount:', amount, 'Date:', transferDate);
    
    // You would then handle the response from the server
  });
  
  // Existing JavaScript code

function handleSignIn(event) {
  event.preventDefault();
  window.location.href = 'Index.html';
}

// More JavaScript code, if needed
