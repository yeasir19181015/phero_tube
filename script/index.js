function loadCategories(){
    // fetch the data 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // convert promise to json 
    .then((res)=>res.json())
    // send data to display 
    .then((data)=>displayCategories(data.categories));   
    
}


function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response) => response.json())
    .then(data => console.log(data))
}



// {
// category
// : 
// "Music"
// category_id : "1001"
// }
function displayCategories(categories){
//  get the container 
const categoryContainer = document.getElementById('categoryContainer');

// loop operation on Array of object 
for(let cat of categories){
    console.log(cat)

// create Element 
 const categoryDiv = document.createElement("div");
 categoryDiv.innerHTML = `
    <button class="btn btn-sm bg-[#E2DFF4] hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`
// append the element 
 categoryContainer.append(categoryDiv)

}
}

// {
//     "category_id": "1003",
//     "video_id": "aaac",
//     "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     "title": "Laugh at My Pain",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//             "profile_name": "Kevin Hart",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "13885"
//     },
//     "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }

const displayVideos = (videos) => {
   const videoContainer = document.getElementById('videoContainer');

   videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div");

    videoCard.innerHTML = `
    
    <h2 class="text-xl">${video.title} </h2>

    `;
    //append
    videoContainer.append(videoCard);
   });
};

loadCategories();
loadVideos();