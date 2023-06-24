document.addEventListener("DOMContentLoaded", function () {
  var videos = document.getElementsByTagName("video");
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});

// Gallery lightbox
const galleryImages = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const imgArray = [];
let currentImgIndex;

// Add click event to each image in the gallery
galleryImages.forEach((img, index) => {
  imgArray.push(img.src);
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
    currentImgIndex = index;
  });
});

// Add click event to close button
close.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Add click event to next button
next.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex + 1) % imgArray.length;
  lightboxImg.src = imgArray[currentImgIndex];
});

// Add click event to previous button
prev.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex - 1 + imgArray.length) % imgArray.length;
  lightboxImg.src = imgArray[currentImgIndex];
});

window.addEventListener("load", (event) => {
  // Your Imgix source ID
  const imgixSourceID = "64907274ac3273c56475f2b9";

  // Get all images on the page
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    // Create a URL object from the image src
    let imgUrl = new URL(img.src);

    // Use the pathname property of the URL object, which gives us the path without the domain
    let imgPath = imgUrl.pathname;

    // Generate a new Imgix URL for each image
    img.src = `https://${imgixSourceID}.imgix.net${imgPath}?auto=format&fit=max&w=1080&q=80`;
  });
});
