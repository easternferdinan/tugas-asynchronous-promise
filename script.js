const getData = fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=a63cac178c6b4ee094b6d5988a9f0e51");

getData
    .then(result => result.json())
    .then(result => render(result))
    .catch(error => console.log(error))

function searchNews() {
    let input = document.getElementById("search").value;

    const getSearch = fetch(`https://newsapi.org/v2/everything?q=${input}&from=2023-01-31&sortBy=popularity&apiKey=a63cac178c6b4ee094b6d5988a9f0e51`);

    getSearch
        .then(result => result.json())
        .then(result => render(result))
        .catch(error => console.log(error));

    if (input === "") {
        window.location.reload();
    }
}

function render(result) {
    let card = "";

    result.articles.forEach(data => {
        let date = data.publishedAt.replace("T", " ").replace("Z", "");

        card += `
    <div class="col my-3">
        <div class="card h-100">
            <img src="${data.urlToImage}" class="card-img-top" alt="Thumbnail artikel">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
            </div>
            <div class="card-footer">
                <p class="card-text"><small class="text-muted">${date}</small></p>
            </div>
        </div>
    </div>
        `

    })
    
    const selector = document.querySelector(".card-deck");

    selector.innerHTML = card;
}