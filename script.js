document.getElementById('register-btn').addEventListener('click', function() {
    window.location.href = 'join-us.html';
  });
  
  document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
  });
  function searchFunction() {
    var searchTerm = document.getElementById("searchInput").value;
    
    alert("Searching for: " + searchTerm);
  }
  function incrementLikes(element) {
    var likesSpan = element.querySelector('i'); 
    var currentLikes = parseInt(likesSpan.textContent); 
    likesSpan.textContent = currentLikes + 1;
}
function incrementLikes(element) {
  var currentLikes = parseInt(element.innerText);
  element.innerText = currentLikes + 1;
}

function incrementDislikes(element) {
  var currentDislikes = parseInt(element.innerText);
  element.innerText = currentDislikes + 1;
}
