var type = new Typed('.textline', {
    strings: ["Front-End Development", "Gaming", "Tennis", "Music", "Traveling"], //Add more if needed
    typeSpeed: 110,
    backSpeed: 80,
    backDelay: 1000,
    loop: true

})

const scrollLinks = document.querySelectorAll('.scroll-link');

// Loop through each link and add an event listener
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        // Prevent default link behavior
        e.preventDefault();

        // Get the target section from the link's href attribute
        const target = link.getAttribute('href');

        // Scroll to the target section 
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});