// Select the menu button element and the header element using their class names
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

// Add a click event listener to the menu button element
menu.onclick = () => {
    // Toggle the "fa-times" class on the menu button element
    menu.classList.toggle('fa-times');
    // Toggle the "active" class on the header element
    header.classList.toggle('active');
    // Toggle the "active" class on the body element
    document.body.classList.toggle('active');
}

window.onscroll = () => {
    // Add a scroll event listener to the window object
    if (window.innerWidth < 991) {
        // Remove the "fa-times" class from the menu button element
        menu.classList.remove('fa-times');
        // Remove the "active" class from the header element
        header.classList.remove('active');
        // Remove the "active" class from the body element
        document.body.classList.remove('active');
    }

    // For each section element on the page
    document.querySelectorAll('section').forEach(sec => {
        // Get the current scroll position of the window
        let top = window.scrollY;
        // Get the offset from the top of the page of the current section element, subtracted by 150px
        let offset = sec.offsetTop - 150;
        // Get the height of the current section element
        let height = sec.offsetHeight;
        // Get the ID attribute of the current section element
        let id = sec.getAttribute('id');

        // If the current scroll position is within the bounds of the current section element
        if (top >= offset && top < offset + height) {
            // For each anchor element in the navbar of the header
            document.querySelectorAll('.header .navbar a').forEach(links => {
                // Remove the "active" class from the anchor element
                links.classList.remove('active');
                // Add the "active" class to the anchor element whose href attribute matches the ID attribute of the current section element
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active')
            });
        };

    });

}

// Select the element with the class "moving-txt"
const text = document.querySelector("moving-txt");

// Define a function that changes the text content and color of the element with class "moving-txt"
const textLoad = () => {
    // Change the text content to "Developer" and the color to red after a delay of 0 milliseconds
    setTimeout(() => {
        text.textContent = "Developer...";
        text.style.color = "red";
    }, 0);

    // Change the text content to "Engineer" and the color to green after a delay of 4000 milliseconds (4 seconds)
    setTimeout(() => {
        text.textContent = "Engineer...";
        text.style.color = "green";
    }, 4000);


    // Change the text content to "Chef" and the color to blue after a delay of 8000 milliseconds (8 seconds)
    setTimeout(() => {
        text.textContent = "Chef.......";
        text.style.color = "blue";
    }, 8000);
}

// Call the textLoad function once when the script is run
textLoad();
// Call the textLoad function every 12000 milliseconds (12 seconds) using setInterval()
setInterval(textLoad, 12000);

// Set initial values for activeImageId and nextImageId
var activeImageId = 1;
var nextImageId = 1;

// Run a function every 1550 milliseconds (1.55 seconds) using setInterval()
setInterval(function () {
    // Increment nextImageId by 1
    nextImageId = nextImageId + 1;

    // If nextImageId is less than 3 (i.e. if there are more images to display)
    if (nextImageId < 3) {
        // Replace the "visible" class on the currently active image with "hidden"
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");

        // Replace the "hidden" class on the next image with "visible"
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");

        // Update activeImageId to be equal to nextImageId
        activeImageId = nextImageId;

        // If nextImageId is greater than or equal to 3 (i.e. if it's time to loop back to the first image)
        // Replace the "visible" class on the currently active image with "hidden"
    } else {
        // Replace the "visible" class on the currently active image with "hidden"
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        // Replace the "hidden" class on the first image with "visible"
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
        // Update activeImageId to be equal to 3 (since we're looping back to the first image)
        activeImageId = 3;
        // Reset nextImageId to 0
        nextImageId = 0;
    }

}, 1550);

// Initialize MixItUp on the element with the class "work_container"

let mixerPorject = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

// Select all elements with the class "work_item"
const linkwork = document.querySelectorAll('.work_item')

// Define a function to set the "active-work" class on the clicked element
function activeWork() {
    // Remove the "active-work" class from all elements with the class "work_item"
    linkwork.forEach(L => L.classList.remove('active-work'))
    // Add the "active-work" class to the clicked element
    this.classList.add('active-work')
}

// Add a click event listener to each element with the class "work_item" that calls the activeWork function when clicked
linkwork.forEach(L => L.addEventListener("click", activeWork))

// Add a click event listener to the document that checks if the clicked element has the class "work_button"
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
// Define a function to toggle the "open" class on the element with the class "portfolio_popup"
function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open")
}
// Add a click event listener to the element with the class "portfolio_popup-close" that calls the togglePortfolioPopup function when clicked
document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

// Define a function to populate the portfolio popup with details from the clicked portfolio item
function portfolioItemDetails(portfolioItem) {
    // Set the source of the image in the portfolio popup to be the same as the image in the clicked portfolio item
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;

    // Set the text content of the element with the class "portfolio_popup-subtitle span" to be the same as the text content of the element with the class "work_title" in the clicked portfolio item
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;

    // Set the innerHTML of the element with the class "portfolio_popup-body" to be the same as the innerHTML of the element with the class "portfolio_item-details" in the clicked portfolio item
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;

}

// Add a click event listener to the element with the ID "theme-toggler"
document.getElementById('theme-toggler').addEventListener('click', function () {
    // Toggle the "fa-sun" class on the clicked element
    this.classList.toggle('fa-sun');
    // Toggle the "dark-theme" class on the body element
    document.body.classList.toggle('dark-theme');
});
