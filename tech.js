// script.js
document.addEventListener("DOMContentLoaded", function() {
  const photoGallery = document.querySelector(".photo-gallery");
  const photos = photoGallery.querySelectorAll("img");

  photos.forEach(photo => {
      photo.addEventListener("click", function() {
          // Remove active class from all photos
          photos.forEach(p => p.classList.remove("active"));
          
          // Add active class to the clicked photo
          this.classList.add("active");
      });
  });
});
