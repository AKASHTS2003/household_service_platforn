document.addEventListener("DOMContentLoaded", function () {
    // Price Range Display
    const priceSlider = document.getElementById("price");
    const priceValue = document.getElementById("price-value");
  
    priceSlider.addEventListener("input", function () {
      priceValue.textContent = priceSlider.value;
    });
  
    // Rating Stars Clickable
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.addEventListener("click", function () {
        let rating = this.getAttribute("data-value");
        stars.forEach((s, index) => {
          s.classList.toggle("active", index < rating);
        });
      });
    });
  });
  