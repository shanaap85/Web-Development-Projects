let seI = document.getElementById("searchInput");
let seR = document.getElementById("searchResults");
let option = {
    method: "GET",
}
let el;
seI.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        el = seI.value;
    }
    let url = "https://apis.ccbp.in/wiki-search?search=" + el;
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let a = jsonData.search_results;
            for (let i of a) {
                console.log(i)
                let div = document.createElement("div");
                let title = document.createElement("h1");
                title.textContent = i.title;
                div.appendChild(title);
                let link = document.createElement("a");
                link.textContent = i.link;
                link.setAttribute("href", i.link);
                div.appendChild(link);
                let des = document.createElement("p");
                des.textContent = i.description;
                div.appendChild(des);
                seR.appendChild(div);
            }
        })
})
