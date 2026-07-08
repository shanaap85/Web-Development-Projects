let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {

    if (event.key === "Enter") {

        let searchInput = searchInputEl.value.trim();

        if (searchInput === "") {
            return;
        }

        spinnerEl.classList.remove("d-none");
        searchResultsEl.innerHTML = "";

        let url =
            "https://apis.ccbp.in/wiki-search?search=" +
            encodeURIComponent(searchInput);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResults(data.search_results);
            })
            .catch(error => {
                spinnerEl.classList.add("d-none");
                console.log(error);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
