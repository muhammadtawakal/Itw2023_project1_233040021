
function typeWriter(text, index, delay) {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(function () {
        typeWriter(text, index, delay);
      }, delay);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const textToType = "Explore my skills and my profile";
    const delay = 100;

    typeWriter(textToType, 0, delay);
  });

function typeWriter(text, index, delay) {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(function () {
        typeWriter(text, index, delay);
      }, delay);
    }
  }
  