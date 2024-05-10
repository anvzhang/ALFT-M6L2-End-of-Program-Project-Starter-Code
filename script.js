// Hide elements initially
document.querySelectorAll(".buy").forEach(element => {
    element.style.display = "none";
});
document.querySelectorAll(".ticketSelection").forEach(element => {
    element.style.display = "none";
});
document.querySelectorAll(".checkout").forEach(element => {
    element.style.display = "none";
});

// Add click event listener to all elements with class "pokemon"
document.querySelectorAll(".pokemon").forEach(element => {
    element.addEventListener("click", function() {
        // Your logic here when a pokemon is clicked
    });
});

// Add click event listener to elements with class "calculateTotal"
document.querySelectorAll(".calculateTotal").forEach(element => {
    element.addEventListener("click", function() {
        let child = parseInt(document.getElementById("childTickets").value);
        let adult = parseInt(document.getElementById("adultTickets").value);
        let totalCost = (child * childTicketPrice) + (adult * adultTicketPrice);
        if (totalCost < 0) {
            document.querySelector(".totalCost").textContent = "You cannot select a negative number";
        } else {
            document.querySelector(".totalCost").textContent = "Total Cost: $" + totalCost.toFixed(2);
        }
    });
});
