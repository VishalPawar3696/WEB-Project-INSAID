function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
  
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
  
    if (email == "") {
      alert("Please enter your email");
      return false;
    }
  
    if (message == "") {
      alert("Please enter your message");
      return false;
    }
  
    alert("Your query is successfully submitted!");
    
    return true;
  }
  