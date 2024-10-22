const button = document.getElementById("myButton");
const popup = document.getElementById("myPopup");

button.addEventListener("click", function(event) {
    popup.style.display = "block";
    event.stopPropagation(); 
});

document.addEventListener("click", function(event) {
    
    if (!popup.contains(event.target) && event.target !== button) {
        popup.style.display = "none";
    }
});