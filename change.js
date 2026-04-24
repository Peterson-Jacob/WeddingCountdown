window.onload = function(){

    const img = document.getElementById("JacobandTeresa");
    
    const images = [
        "pic1.jpg",
        "pic2.jpg",
        "pic3.jpg",
        "pic4.jpg",
        "pic5two.jpg",
        "pic6two.jpg",
        "pic8.jpg",
        "pic9two.jpg",
        "pic11.jpg",
        "pic12.jpg"
    ];

    let currentIndex = 0;

    function changeImage() {
        // Fade out current image
        img.classList.add("fade-out");

        // Wait for fade-out to finish, then change image and fade in
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            img.src = "images/" + images[currentIndex];

            // Trigger fade-in
            img.classList.remove("fade-out");
        }, 1000); // Should match or slightly exceed CSS transition time
    }

    // Start the slideshow - change every 5 seconds
    setInterval(changeImage, 5000);
}