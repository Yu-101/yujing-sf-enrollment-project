document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  document.getElementById("thankYouMsg").innerText = 
    `Thank you, ${name}! Your feedback has been received: "${message}"`;

  document.getElementById("feedbackForm").reset();
});
