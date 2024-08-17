
const searchForm = document.getElementById("searchForm");
const searchResult = document.getElementById("searchResult");
const searchBox = document.getElementById("searchBox");
const showMoreBtn = document.getElementById("showButton");

const accessKey = "";


let page = 1;
let keyword = "";

async function image() {
    
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page ===1){
        searchResult.innerHTML="";
    }

    const results= data.results;

    results.map((result)=>{
        const image= document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("b");
        imageLink.href= result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    image();
});
showButton.addEventListener("click", () => {
    page++;
    image();
});