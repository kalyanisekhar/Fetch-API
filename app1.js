const imageContainer = document.getElementById('image-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let start = 0;
const limit = 9;

// Function to fetch images from JSONPlaceholder
async function fetchImages(start, limit) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayImages(data);
    } catch (error) {
        console.error('Error fetching images:', error.message);
    }
}

// Function to display the fetched images
function displayImages(images) {
    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item');

        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.title;

        imageItem.appendChild(imgElement);
        imageContainer.appendChild(imageItem);
    });
}

// Function to load more images
function loadMoreImages() {
    start += limit;
    fetchImages(start, limit);
}

// Initial load of images
fetchImages(start, limit);