// V_Day24.js

document.addEventListener("DOMContentLoaded", function() {
    var yesButton = document.getElementById("yes-button");
    var noButton = document.getElementById("no-button");
    var valentineImage = document.getElementById("valentine-image");
    var responseText = document.getElementById("response-text");
    var footer = document.querySelector('footer');
    
    // Function to toggle footer visibility based on scroll direction
    function toggleFooterVisibility() {
        var lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scrolling down
                footer.classList.remove('visible');
            } else {
                // Scrolling up
                footer.classList.add('visible');
            }

            lastScrollTop = currentScroll;
        });
    }

    // Call the function to toggle footer visibility
    toggleFooterVisibility();

    yesButton.addEventListener("click", function() {
        responseText.innerHTML = "HURRAY, thank you for making me the happiest person alive! ❤️ <br> I LOVE YOU!";
        valentineImage.style.display = "block";
    });

    noButton.addEventListener("click", function() {
        var messages = [
            "Try again darling", 
            "wrong answer, maybe next time kha", 
            "Not this time, try again kha", 
            "Give it another shot love", 
            "That's not quite it kha", 
            "Incorrect, try again love", 
            "Sorry, wrong answer kha", 
            "Not the right answer baby", 
            "lol, what are you saying, try again",
            "Nästa, yes. Try again kha",
            "Honeey, what are you doing, try again kha",
            "Naaah, you delulu. Try again.", 
            "What are you on about, try again kha", 
            "Not today, try again kha", 
            "Give it another try, that's not correct"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        responseText.innerHTML = messages[randomIndex];
    });
});
