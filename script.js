const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg/1024px-Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg",
  },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/57/Galunggung.jpg" },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Expn7398_%2839695069782%29.jpg/1280px-Expn7398_%2839695069782%29.jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg",
  },
  {src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Top_of_Atmosphere.jpg"},
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ocean_from_Leblon.jpg/1024px-Ocean_from_Leblon.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lake_mapourika_NZ.jpeg/1024px-Lake_mapourika_NZ.jpeg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mill_Pond_Sunset.jpg/1024px-Mill_Pond_Sunset.jpg"
  }
];

const imageList = document.getElementById("imageList");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentIndex = 0;
const imagesPerPage = 3;

// Function to display images based on current index
function displayImages() {
  imageList.innerHTML = "";
  for (
    let i = currentIndex;
    i < currentIndex + imagesPerPage && i < images.length;
    i++
  ) {
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = images[i].src;
    listItem.appendChild(image);
    imageList.appendChild(listItem);
  }
}

// Function to handle next button click
function nextImages() {
  if (currentIndex + imagesPerPage < images.length) {
    currentIndex += imagesPerPage;
    displayImages();
  }
}

// Function to handle previous button click
function prevImages() {
  if (currentIndex - imagesPerPage >= 0) {
    currentIndex -= imagesPerPage;
    displayImages();
  }
}

// Event listeners for next and previous buttons
nextButton.addEventListener("click", nextImages);
prevButton.addEventListener("click", prevImages);

// Display initial set of images
displayImages();
