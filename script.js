let scrollbtn = document.getElementById("scrollbtn");

window.onscroll = function() {scrollFuction()};

function scrollFuction(){
    if(document.documentElement.scrollTop > 100){
        scrollbtn.style.display = 'block';
    }
    else{
        scrollbtn.style.display = 'none';
    }
}

function topFunction(){
    document.documentElement.scrollTop = 0;
}


function submitForm() {
    // Get all the required input elements
    const inputs = document.querySelectorAll('#form [required]');
    
    let allFieldsFilled = true;
  
    // Check if all required fields have a value
    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFieldsFilled = false;
      }
    });
  
    if (allFieldsFilled) {
      alert('Info submit');
      // Add code here to submit the form to the server if needed
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  function displayMenu() {
    let element = document.getElementById("menu");
    element.classList.toggle("display-menu");
  }