// Step 1: Get DOM elements
let nextDom = document.getElementById('next'); // Next button
let prevDom = document.getElementById('prev'); // Previous button
let carouselDom = document.querySelector('.carousel'); // Carousel container
let SliderDom = carouselDom.querySelector('.carousel .list'); // Slide container
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Thumbnail border container
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Thumbnail items
let timeDom = document.querySelector('.carousel .time'); // Time display

// Move the first thumbnail item to the end
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Time settings
let timeRunning = 3000; // Time for slide transition
let timeAutoNext = 7000; // Time for auto slide transition

// Next button click event
nextDom.onclick = function(){
    showSlider('next');    
}

// Previous button click event
prevDom.onclick = function(){
    showSlider('prev');    
}

// Initialize variables for timeouts
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click(); // Trigger automatic slide change after a set time
}, timeAutoNext)

// Function to show the next or previous slide
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item'); // Slide items
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item'); // Thumbnail items
    
    // If next button is clicked
    if(type === 'next'){
        // Move the first slide item to the end
        SliderDom.appendChild(SliderItemsDom[0]);
        // Move the first thumbnail item to the end
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        // Add class for transition effect
        carouselDom.classList.add('next');
    }
    // If previous button is clicked
    else{
        // Move the last slide item to the beginning
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        // Move the last thumbnail item to the beginning
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        // Add class for transition effect
        carouselDom.classList.add('prev');
    }
    
    // Clear timeout for transition effect
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next'); // Remove next transition class
        carouselDom.classList.remove('prev'); // Remove prev transition class
    }, timeRunning);

    // Clear timeout for auto slide change
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click(); // Trigger next slide after a set time
    }, timeAutoNext)
}
