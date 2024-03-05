const imageContainer =document.getElementById('image-container');
const loadMoreBtn =document.getElementById('load-more-btn');

let start =0;
const limit =9;

async function fetchImage(start, limit){
    try{
        const responce =await fatch(`https://via.placeholder.com/150/24f355?_start=${start}&_limit=${limit}`);
    
    if(!Response.ok){
       throw new Error('Network responce was not ok')
    }
    const data =await responce.json();
    displayImages(data);
}
catch(error){
    console.error('error fetching images:',error.message);
}
}

function displayimage(images){
    images.forEach(image=>{
        const imageItem=documnent.createElement('div');
        imageItem.classList.add('image-item');

        const imgElement =document.createElement('img');
        imgElement.src=image.url;
        imgElement.alt=image.title;
    });

}
function loadMoreImages(){
    start +=limit;
    fetchImage(start, limit);

}

fetchImage(start ,limit);
