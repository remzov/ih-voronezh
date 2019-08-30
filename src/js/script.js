try {
    let innerPageNav = document.querySelector(".inner-page__nav");
    
    innerPageNav.addEventListener("click", () => {
        innerPageNav.classList.toggle("small-nav");
    });
} catch (e) {}