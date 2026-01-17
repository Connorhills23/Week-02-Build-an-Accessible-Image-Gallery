const images = [
  {
    src: "images/image1.jpg",
  },
  {
    src: "images/image2.jpg",
  },
  {
    src: "images/image3.jpg",
  },
  {
    src: "images/image4.jpg",
  },
  {
    src: "images/image5.jpg",
  },
];

let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const thumbnails = document.querySelectorAll(".thumb");

function updateGallery(index) {
  currentIndex = index;
  mainImage.src = images[index].src;
  mainImage.alt = images[index].alt;

  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  thumbnails[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery(newIndex);
});

nextBtn.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % images.length;
  updateGallery(newIndex);
});

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    updateGallery(Number(thumb.dataset.index));
  });
});
